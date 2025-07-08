#!/bin/bash

echo "🚀 Setting up Muhammad Noman's Portfolio"
echo "========================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm is installed: $(npm --version)"

# Frontend setup
echo ""
echo "📦 Setting up Frontend..."
cd "$(dirname "$0")"

if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
    echo "✅ Frontend dependencies installed"
else
    echo "✅ Frontend dependencies already installed"
fi

# Backend setup
echo ""
echo "🔧 Setting up Backend..."
cd backend

if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
    echo "✅ Backend dependencies installed"
else
    echo "✅ Backend dependencies already installed"
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cp env.example .env
    echo "✅ .env file created from template"
    echo "⚠️  Please edit .env file with your configuration"
else
    echo "✅ .env file already exists"
fi

echo ""
echo "🎉 Setup completed!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env file with your configuration"
echo "2. Start MongoDB (local or cloud)"
echo "3. Start backend: cd backend && npm run dev"
echo "4. Start frontend: npm run dev"
echo ""
echo "Frontend will be available at: http://localhost:5173"
echo "Backend will be available at: http://localhost:5000"
echo ""
echo "Happy coding! 🚀" 