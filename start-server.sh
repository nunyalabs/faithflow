#!/bin/bash

# FaithFlow Quick Start Script
# This script helps you quickly launch FaithFlow

echo "🙏 FaithFlow - Offline Church Management PWA"
echo "=============================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the faithflow directory"
    exit 1
fi

echo "✅ FaithFlow directory found"
echo ""

# Function to start Python server
start_python_server() {
    echo "🚀 Starting Python HTTP Server..."
    echo "📍 Server will run on http://localhost:8000"
    echo ""
    echo "🌐 Open your browser to: http://localhost:8000"
    echo ""
    echo "⏹️  Press Ctrl+C to stop the server"
    echo ""
    
    # Try Python 3 first, then Python 2
    if command -v python3 &> /dev/null; then
        python3 -m http.server 8000
    elif command -v python &> /dev/null; then
        python -m http.server 8000
    else
        echo "❌ Python not found. Please install Python or use another method."
        exit 1
    fi
}

# Check for Python
if command -v python3 &> /dev/null || command -v python &> /dev/null; then
    start_python_server
else
    echo "❌ Python not found on your system"
    echo ""
    echo "Alternative methods:"
    echo "1. Install Python from https://python.org"
    echo "2. Use Node.js: npx http-server -p 8000"
    echo "3. Just open index.html in your browser"
    echo ""
    exit 1
fi
