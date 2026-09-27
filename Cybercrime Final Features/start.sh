#!/bin/bash
# CyberInsight Development Server Launcher

echo "🚀 Starting CyberInsight Development Server..."
echo ""
echo "Prerequisites checked:"
echo "✓ Node.js installed"
echo "✓ npm installed"
echo ""

# Navigate to project
cd "$(dirname "$0")" || exit

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
  echo "✅ Dependencies installed"
  echo ""
fi

echo "🔥 Starting Vite development server..."
echo "📍 Available at: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
