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
                <p>
                    Located in the heart of Baja California, Rancho Costa Verde offers the perfect blend of luxury, nature, and convenience for residents and visitors alike.
                </p>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Drive Times</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            San Felipe, Baja California – 40 minutes
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Calexico, CA, USA – 2 hours, 40 minutes
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            San Diego, CA, USA – 4 hours, 40 minutes
                        </li>
                    </ul>
                </div>

                <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.677364878664!2d-114.9333333!3d31.0666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x812e0c0000000001%3A0x0!2sRancho%20Costa%20Verde!5e0!3m2!1sen!2smx!4v1625000000000!5m2!1sen!2smx"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Rancho Costa Verde Location"
                    ></iframe>
                </div>
            </div>
        </DevelopmentPageLayout>
    );
};

export default WhereWeAre;
