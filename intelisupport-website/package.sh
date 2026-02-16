#!/bin/bash

# InteliSupport Website Packaging Script
# This script creates a zip file of the website for easy deployment

echo "📦 Packaging InteliSupport Website..."

# Create a timestamp for the package
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
PACKAGE_NAME="intelisupport-website_${TIMESTAMP}.zip"

# Create zip file excluding unnecessary files
zip -r "$PACKAGE_NAME" . \
    -x "*.sh" \
    -x "*.git*" \
    -x "*.DS_Store" \
    -x "node_modules/*" \
    -x "*.log"

echo "✅ Website packaged successfully as: $PACKAGE_NAME"
echo ""
echo "📋 Package Contents:"
echo "   • index.html (Homepage)"
echo "   • about.html (About page)"
echo "   • services.html (Services page)"
echo "   • contact.html (Contact page)"
echo "   • css/style.css (Main stylesheet)"
echo "   • js/script.js (Main JavaScript)"
echo "   • js/contact.js (Contact functionality)"
echo "   • README.md (Documentation)"
echo ""
echo "🚀 Ready for deployment!"
echo "   Upload the contents to your web server"
echo "   Ensure proper file permissions (644 for files, 755 for directories)"
echo "   Test all functionality after deployment"