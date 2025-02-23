import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact';
import PixelButton from '../Button';

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.log(error);
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
            <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                    Name
                </label>
                <input
                    {...register('name')}
                    id="name"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Your name"
                />
                {errors.name && (
                    <p className="text-error text-sm">{errors.name.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                    Email
                </label>
                <input
                    {...register('email')}
                    id="email"
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="your.email@example.com"
                />
                {errors.email && (
                    <p className="text-error text-sm">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                    Message
                </label>
                <textarea
                    {...register('message')}
                    id="message"
                    className="textarea textarea-bordered w-full h-32"
                    placeholder="Your message"
                />
                {errors.message && (
                    <p className="text-error text-sm">{errors.message.message}</p>
                )}
            </div>

            <PixelButton
                type="submit"
                isLoading={isLoading}
                loadingText="Sending..."
                variant={submitStatus === 'success' ? 'success' : submitStatus === 'error' ? 'danger' : 'default'}
                isBlock
            >
                Send Message
            </PixelButton>

            {submitStatus === 'success' && (
                <p className="text-success text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
                <p className="text-error text-center">Failed to send message. Please try again.</p>
            )}
        </form>
    );
}