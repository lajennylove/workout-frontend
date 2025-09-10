// Main TypeScript file for the personal trainer website
import './style.css'
import { images } from './assets/images/index'

// Set the hero background image
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('#home') as HTMLElement
    if (heroSection && images.heroBg) {
        heroSection.style.backgroundImage = `url(${images.heroBg})`
    }
})

// Set the goal card background images
document.addEventListener('DOMContentLoaded', () => {
    // Weight Loss card - apply to the grayscale background layer
    const weightLossCard = document.querySelector('#weight-loss-card .grayscale') as HTMLElement
    if (weightLossCard && images.weightLossBg) {
        weightLossCard.style.backgroundImage = `url(${images.weightLossBg})`
    }

    // Health Status card - apply to the grayscale background layer
    const healthStatusCard = document.querySelector('#health-status-card .grayscale') as HTMLElement
    if (healthStatusCard && images.healthStatusBg) {
        healthStatusCard.style.backgroundImage = `url(${images.healthStatusBg})`
    }

    // Body Building card - apply to the grayscale background layer
    const bodyBuildingCard = document.querySelector('#body-building-card .grayscale') as HTMLElement
    if (bodyBuildingCard && images.bodyBuildingBg) {
        bodyBuildingCard.style.backgroundImage = `url(${images.bodyBuildingBg})`
    }

    // Jenny Martinez profile image
    const jennyMartinezImage = document.querySelector('#jenny-martinez-image') as HTMLElement
    if (jennyMartinezImage && images.jennyMartinezBg) {
        console.log('Setting Jenny Martinez image:', images.jennyMartinezBg)
        jennyMartinezImage.style.backgroundImage = `url(${images.jennyMartinezBg})`
    } else {
        console.log('Jenny Martinez image not found or not loaded:', {
            element: jennyMartinezImage,
            imageUrl: images.jennyMartinezBg
        })
    }
})

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const mobileMenu = document.querySelector('#navbar-sticky');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', (!isExpanded).toString());
        });
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('[data-faq-item]');
    faqItems.forEach(item => {
        const button = item.querySelector('[data-faq-button]');
        const content = item.querySelector('[data-faq-content]');

        if (button && content) {
            button.addEventListener('click', () => {
                const isOpen = content.classList.contains('hidden');

                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('[data-faq-content]');
                    const otherButton = otherItem.querySelector('[data-faq-button]');
                    if (otherContent && otherButton) {
                        otherContent.classList.add('hidden');
                        otherButton.querySelector('svg')?.classList.remove('rotate-45');
                    }
                });

                // Toggle current item
                if (isOpen) {
                    content.classList.remove('hidden');
                    button.querySelector('svg')?.classList.add('rotate-45');
                } else {
                    content.classList.add('hidden');
                    button.querySelector('svg')?.classList.remove('rotate-45');
                }
            });
        }
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href')?.substring(1);
            const targetElement = document.getElementById(targetId || '');

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('[data-contact-form]');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission here
            console.log('Form submitted');
        });
    }
});

// Utility functions
export const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
};

