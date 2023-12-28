import BelieveSection from '../components/BelieveSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactSection from '../components/ContactSection';

export default function MainSections() {
    return (
        <div className=''>
            <BelieveSection />
            <ServicesSection />
            <TestimonialsSection />
            <CallToActionSection />
            <ContactSection />
        </div>
    )
}