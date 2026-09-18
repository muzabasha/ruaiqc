#!/usr/bin/env python3
"""
Normalize all headings across topic files to remove markdown formatting.
This script ensures all title fields appear as clean text without quotes, asterisks, or other formatting.
"""

import re
import os
from pathlib import Path

def normalize_heading(text):
    """
    Remove markdown bold markers, extra quotes, and clean up heading text.
    """
    # Remove markdown bold markers (**text**)
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    
    # Remove markdown italic markers (*text* or _text_)
    text = re.sub(r'\*([^*]+)\*', r'\1', text)
    text = re.sub(r'_([^_]+)_', r'\1', text)
    
    # Remove extra quotes if they appear at start/end
    text = text.strip().strip('"').strip("'")
    
    return text

def process_topic_file(filepath):
    """
    Process a single TypeScript topic file to normalize all headings.
    """
    print(f"Processing: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    changes_made = 0
    
    # Pattern 1: title fields with markdown formatting
    def replace_title(match):
        nonlocal changes_made
        quote = match.group(1)
        title_content = match.group(2)
        normalized = normalize_heading(title_content)
        if normalized != title_content:
            changes_made += 1
            print(f"  Title: '{title_content}' → '{normalized}'")
        return f"title: {quote}{normalized}{quote}"
    
    content = re.sub(
        r"title:\s*(['\"])([^'\"]+)\1",
        replace_title,
        content
    )
    
    # Pattern 2: motivation field starting with bold markdown heading
    def replace_motivation_heading(match):
        nonlocal changes_made
        full_motivation = match.group(1)
        
        # Check if it starts with a bold heading
        heading_match = re.match(r'\*\*([^*]+)\*\*[:\s]*([\s\S]*)', full_motivation)
        if heading_match:
            heading = heading_match.group(1)
            rest = heading_match.group(2)
            normalized_heading = normalize_heading(heading)
            
            if normalized_heading != heading:
                changes_made += 1
                print(f"  Motivation heading: '**{heading}**' → '{normalized_heading}'")
            
            # Keep the structure but normalize
            new_motivation = f"**{normalized_heading}**{': ' if rest and not rest.startswith(':') else ''}{rest}"
            return f"motivation: `{new_motivation}`"
        
        return match.group(0)
    
    content = re.sub(
        r"motivation:\s*`([^`]+)`",
        replace_motivation_heading,
        content,
        flags=re.MULTILINE
    )
    
    # Pattern 3: Analogies and section titles in funLearning
    def replace_analogy_title(match):
        nonlocal changes_made
        quote = match.group(1)
        title_content = match.group(2)
        normalized = normalize_heading(title_content)
        if normalized != title_content:
            changes_made += 1
            print(f"  Analogy Title: '{title_content}' → '{normalized}'")
        return f"analogyTitle: {quote}{normalized}{quote}"
    
    content = re.sub(
        r"analogyTitle:\s*(['\"])([^'\"]+)\1",
        replace_analogy_title,
        content
    )
    
    # Write back if changes were made
    if changes_made > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✓ Made {changes_made} changes to {os.path.basename(filepath)}")
        return True
    else:
        print(f"  ✓ No changes needed for {os.path.basename(filepath)}")
        return False

def main():
    """
    Process all TypeScript topic files in the content/topics directory.
    """
    topics_dir = Path('content/topics')
    
    if not topics_dir.exists():
        print(f"Error: Directory {topics_dir} does not exist!")
        return
    
    # Get all .ts files
    topic_files = list(topics_dir.glob('*.ts'))
    
    if not topic_files:
        print(f"No TypeScript files found in {topics_dir}")
        return
    
    print(f"Found {len(topic_files)} topic files\n")
    
    total_modified = 0
    for filepath in sorted(topic_files):
        if process_topic_file(filepath):
            total_modified += 1
        print()
    
    print(f"\n{'='*60}")
    print(f"Summary: Modified {total_modified} of {len(topic_files)} files")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
