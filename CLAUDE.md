# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gjeografi is an interactive geography quiz application in Albanian. It features educational explanations and quiz games covering three main topics:
1. Rrezatimi Diellor dhe Temperatura e Ajrit (Solar Radiation and Air Temperature)
2. Shtypja e Ajrit (Air Pressure)
3. Erërat (Winds)

## Architecture

- `index.html` - Main HTML with two tabs: Shpjegime (Explanations) and Kuiz (Quiz)
- `styles.css` - Geography-themed styling with animated earth background
- `script.js` - Quiz logic and question database (30 questions total, 10 per topic)

## Development

Open `index.html` in a browser - no build process required. This is a static HTML/CSS/JS application.

## Adding Content

- **New questions**: Add to `quizData` object in `script.js` following the existing format with `question`, `answers`, `correct` (index), and `explanation`
- **New topics**: Add topic button in HTML, topic content section, and corresponding quiz data in JavaScript
