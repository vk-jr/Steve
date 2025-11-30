import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image14 } from '@/assets/imageImports'; // Using a placeholder image for now

const WhereWeAre = () => {
    return (
        <DevelopmentPageLayout
            title="Where We Are"
            subtitle="Km 52.5 Hwy 5 San Felipe - Puertecitos Corridor, Baja California, Mexico"
            heroImage={image14}
        >
            <div className="space-y-8">
                <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    <iframe
                        src="https://maps.google.com/maps?q=San+Felipe+-+Puertecitos+Corridor,+Baja+California,+Mexico&t=&z=10&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="San Felipe - Puertecitos Location"
                    ></iframe>
                </div>

                <div className="text-center space-y-8 max-w-3xl mx-auto">
                    <p className="text-lg leading-relaxed">
                        Rancho Costa Verde is located 150 miles south of the US border on the east coast of Baja California, Mexico, on the Sea of Cortes. 30 miles south of the town of San Felipe.
                    </p>

                    <div className="space-y-4">
                        <p className="text-gray-600">The address is:</p>
                        <h2 className="text-3xl md:text-4xl font-cormorant text-[#1a9ea3]">
                            Km 52.5 Hwy 5<br />
                            San Felipe - Puertecitos Corridor<br />
                            Baja California, Mexico
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium">Drive times:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>San Felipe, Baja California – 40 minutes</li>
                            <li>Calexico, CA, USA – 2 hours, 40 minutes</li>
                            <li>San Diego, CA, USA – 4 hours, 40 minutes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </DevelopmentPageLayout>
    );
};

export default WhereWeAre;
