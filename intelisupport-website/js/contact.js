// Contact page specific JavaScript functionality

// Chat functionality
function openChat() {
    // Simulate opening a chat widget
    showNotification('Live chat feature would open here. For now, please use our contact form or call us directly.', 'info');
}

// Remote support request
function requestRemoteSupport() {
    // Simulate remote support request
    const modal = createModal(
        'Remote Support Request',
        `
        <div class="remote-support-modal">
            <p>To initiate a remote support session, please:</p>
            <ol>
                <li>Call our support line at <strong>(555) 123-4567</strong></li>
                <li>Provide your contact information and describe the issue</li>
                <li>Our technician will send you a secure connection link</li>
                <li>Click the link to allow remote access to your computer</li>
            </ol>
            <div class="modal-actions">
                <a href="tel:+15551234567" class="btn btn-primary">Call Now</a>
                <button onclick="closeModal()" class="btn btn-secondary">Close</button>
            </div>
        </div>
        `
    );
    document.body.appendChild(modal);
}

// Enhanced form validation for contact page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm(this)) {
                submitContactForm(this);
            }
        });
    }
});

// Field validation
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error');
    removeFieldError(field);

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }

    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }

    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    if (!isValid) {
        field.classList.add('error');
        showFieldError(field, errorMessage);
    }

    return isValid;
}

// Show field error
function showFieldError(field, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    
    const formGroup = field.closest('.form-group');
    if (formGroup && !formGroup.querySelector('.field-error')) {
        formGroup.appendChild(errorElement);
    }
}

// Remove field error
function removeFieldError(field) {
    const formGroup = field.closest('.form-group');
    if (formGroup) {
        const errorElement = formGroup.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
}

// Validate entire contact form
function validateContactForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    // Validate consent checkbox
    const consentCheckbox = form.querySelector('input[name="consent"]');
    if (consentCheckbox && !consentCheckbox.checked) {
        isValid = false;
        showNotification('Please agree to our privacy policy to continue.', 'error');
    }

    return isValid;
}

// Submit contact form
function submitContactForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const formObject = {};
    
    // Handle regular fields
    for (let [key, value] of formData.entries()) {
        if (key.endsWith('[]')) {
            // Handle checkbox arrays
            const arrayKey = key.slice(0, -2);
            if (!formObject[arrayKey]) {
                formObject[arrayKey] = [];
            }
            formObject[arrayKey].push(value);
        } else {
            formObject[key] = value;
        }
    }
    
    // Handle services checkboxes separately
    const serviceCheckboxes = form.querySelectorAll('input[name="services[]"]:checked');
    formObject.services = Array.from(serviceCheckboxes).map(cb => cb.value);
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        showNotification(
            'Thank you for your inquiry! Our team will review your request and get back to you within 24 hours. For urgent matters, please call our emergency hotline.',
            'success'
        );
        
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Log form data (in real implementation, send to server)
        console.log('Form submitted:', formObject);
        
    }, 2000);
}

// Create modal utility
function createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    // Add modal styles if not already present
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease-out;
            }
            .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                animation: slideInUp 0.3s ease-out;
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid #e2e8f0;
            }
            .modal-header h3 {
                margin: 0;
                color: #1e293b;
            }
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #64748b;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-close:hover {
                color: #1e293b;
            }
            .modal-body {
                padding: 1.5rem;
            }
            .modal-actions {
                display: flex;
                gap: 1rem;
                margin-top: 1.5rem;
                justify-content: flex-end;
            }
            .remote-support-modal ol {
                margin: 1rem 0;
                padding-left: 1.5rem;
            }
            .remote-support-modal li {
                margin-bottom: 0.5rem;
                line-height: 1.5;
            }
            @keyframes slideInUp {
                from {
                    transform: translateY(30px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Close modal when clicking overlay
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    return modal;
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => modal.remove(), 300);
    }
}

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(fadeOutStyle);

// Urgency-based styling
document.addEventListener('DOMContentLoaded', function() {
    const urgencySelect = document.getElementById('urgency');
    if (urgencySelect) {
        urgencySelect.addEventListener('change', function() {
            const form = this.closest('form');
            const submitButton = form.querySelector('button[type="submit"]');
            
            // Remove existing urgency classes
            form.classList.remove('urgency-low', 'urgency-medium', 'urgency-high', 'urgency-critical');
            
            // Add appropriate urgency class
            if (this.value) {
                form.classList.add(`urgency-${this.value}`);
                
                // Update submit button text based on urgency
                const buttonText = submitButton.querySelector('i').nextSibling;
                switch (this.value) {
                    case 'critical':
                        submitButton.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Send Urgent Request';
                        break;
                    case 'high':
                        submitButton.innerHTML = '<i class="fas fa-clock"></i> Send Priority Request';
                        break;
                    default:
                        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                }
            }
        });
    }
});

// Add urgency styling
const urgencyStyles = document.createElement('style');
urgencyStyles.textContent = `
    .field-error {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .urgency-critical .btn-primary {
        background: #dc2626;
        animation: pulse 2s infinite;
    }
    
    .urgency-high .btn-primary {
        background: #ea580c;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
    }
    
    .checkbox-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
    
    .checkbox-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 6px;
        transition: background-color 0.2s ease;
    }
    
    .checkbox-item:hover {
        background-color: #f8fafc;
    }
    
    .checkbox-item input[type="checkbox"] {
        width: auto;
        margin: 0;
    }
    
    .checkbox-item.consent {
        grid-column: 1 / -1;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1rem;
        font-size: 0.9rem;
        line-height: 1.4;
    }
    
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    
    @media (max-width: 768px) {
        .form-row {
            grid-template-columns: 1fr;
        }
        
        .checkbox-group {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(urgencyStyles);