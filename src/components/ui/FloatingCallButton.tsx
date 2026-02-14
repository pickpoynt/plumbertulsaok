import { Phone } from "lucide-react";
import { Button } from "./button";

const FloatingCallButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 md:hidden animate-bounce">
            <Button
                size="lg"
                className="rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-900/40 p-0"
                asChild
            >
                <a href="tel:8777921410" aria-label="Call Briarcliff Manor Sewer Pros">
                    <Phone className="w-8 h-8" />
                </a>
            </Button>
        </div>
    );
};

export default FloatingCallButton;
