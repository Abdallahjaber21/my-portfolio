import { useState } from "react";
import { useSection } from "@/hooks/useSections";
import { parseSectionContent } from "@/lib/sectionParser";
import ExperienceCard from "@/components/cards/ExperienceCard";
import CV from "@/assets/my_cv.pdf";
import ProjectCard from "@/components/cards/ProjectCard";

// IMAGES
import saxon_img from "@/images/projects/saxon/logo.png";
import almawi_img from "@/images/projects/almawi/almawi.png";
import zmerly_img from "@/images/projects/zmerly/zmerly.png";
import zakey_customer_logo from "@/images/projects/zakey/customer/logo.webp";
import pepsi_lebanon_logo from "@/images/projects/pepsi_lebanon/logo.webp";
import keep_property_logo from "@/images/projects/keep_property/logo.webp";
import ole_logo from "@/images/projects/ole_nutrients/ole_full.png";
import tree_treat_logo from "@/images/projects/tree-treat/logo.webp";
import samar_logo from "@/images/projects/samar/logo.png";
import Contact from "./Contact";

// Flow Bite
import { Modal } from "flowbite-react";

// Swiper Js
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Scrollbar,
    A11y,
    Zoom,
    Mousewheel,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import ProjectWebsiteCard from "@/components/cards/ProjectWebsiteCard";

const Right: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [ModalImgs, setModalImgs] = useState<string[]>([]);
    const is_mobile = window.innerWidth < 540;

    const { data: introSection, isLoading: isLoadingIntro } = useSection('introduction-section-3');

    const handleModalImages = (images: string[]) => {
        setModalImgs(images);
        setOpenModal(true);
    };

    return (
        <div className="right_scrollable_section w-3/5 lg-break:w-full overflow-hidden">
            <section id="about">
                {isLoadingIntro ? (
                    <div className="text-muted">Loading...</div>
                ) : introSection ? (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: parseSectionContent(introSection.content),
                        }}
                    />
                ) : (
                    <div>
                        no data
                    </div>
                )}
            </section>
            <section id="projects" className="mt-20 xs:mt-10">
                <div className="font-bold mb-5 pt-2 text-2xl">Projects</div>
                <ProjectCard
                    title="Samar"
                    project_img={samar_logo}
                    image_bg="#0f2474"
                    orientation="landscape"
                    project_url="https://apps.apple.com/us/app/%D8%B3%D9%85%D8%B1/id6736710369"
                    project_details="The company has known considerable success and has grown significantly in over 60 years of operation. In 2001, SMLC made a strategic alliance with PepsiCo which enlarged the shareholders' base of SMLC, with the majority of the SMLC shares remaining with the Assaf family. Since 2001, a number of brands were gradually added to SMLC's portfolio, these include: Tropicana, Mr.Juicy, Lipton Ice Tea, Gatorade, AMP, H2Oh! , and Aquafina mineral water."
                    project_skills="flutter,dart,firebase,android,ios,sqlite"
                    project_screenshot="samar/login.png,samar/home.png,samar/shop.png,samar/game.png,samar/questions.png,samar/winner.png,samar/profile.png"
                    push_images_func={handleModalImages}
                />
                <ProjectWebsiteCard
                    title="Saxon POS"
                    project_img={saxon_img}
                    image_bg="white"
                    // project_url="#"
                    // project_details="Zakey's mission is to encourage vendors in Qatar and the MENA region to offer their near expiry products, overstock, aging stock and surplus at a lower price enabling families and individuals to benefit from them instead of feeding landfills! At Zakey we are working on bringing people together from the hospitality industry, retail and food services sectors as well as pharmacies, and beauty industry with the support of governmental institutions and consumers to take an active step towards zero waste."
                    project_skills="php,yii2,mysql"
                    project_screenshot="saxon/saxon.png,saxon/saxon-pos.png,saxon/products.png,saxon/barcodes.png"
                    push_images_func={handleModalImages}
                />

                <ProjectCard
                    title="Almawi Home Appliances"
                    project_img={almawi_img}
                    image_bg="rgb(59 118 178)"
                    image_scalable_class="scalable_img"
                    // project_url="https://almawihome.com/beta"
                    project_details="Our online portal is a one-stop service solution for all of your appliances, it diagnoses and estimates the repair service fee and the cost upfront. Our goal is to inform the consumers about the possibility of repairing the purchased product and to contribute to greater environmental awareness and sustainable practices."
                    project_skills="magento2,php,mysql,e-commerce"
                />
                <ProjectCard
                    title="Zmerly Shop"
                    project_img={zmerly_img}
                    image_scalable_class="scalable_img"
                    project_url="https://shop.zmerly.com/"
                    image_bg="#f7793c"
                    project_details="ZMERLY & CO owes the success largely to our exceptional proximity to our customers when it comes to research and development, engineering, design, quality assurance, production and marketing.  Our development strategy is based on over 28 years of experience, promotion of innovations and a constant search for newer and better solutions. "
                    project_skills="magento2,php,mysql,e-commerce"
                />
                <ProjectCard
                    title="Ole Nutrients"
                    image_scalable_class="scalable_img"
                    project_url="https://www.olenutrients.com/"
                    project_img={ole_logo}
                    image_bg="white"
                    project_details="Our journey started back in 2017 with a clear vision towards the love for health, fitness and nature. Our brand is a USDA organic & ISO approved globally. We are passionate about creativity and colors, Ole nutrients full range of superfoods are perfect for daily consumption which are gluten free, vegan friendly and 100% natural."
                    project_skills="magento2,php,mysql,e-commerce"
                />
                <ProjectCard
                    title="Pepsi Lebanon e-commerce"
                    image_scalable_class="scalable_img"
                    project_url="https://pepsilebanon.com/"
                    project_img="/images/projects/pepsi_lebanon/web.webp"
                    image_bg="white"
                    project_details="Our journey started back in 2017 with a clear vision towards the love for health, fitness and nature. Our brand is a USDA organic & ISO approved globally. We are passionate about creativity and colors, Ole nutrients full range of superfoods are perfect for daily consumption which are gluten free, vegan friendly and 100% natural."
                    project_skills="magento1,php,mysql,e-commerce"
                />
                <ProjectCard
                    title="Best For Lebanon"
                    image_scalable_class="scalable_img"
                    project_url="https://bestfor-lb.com/"
                    project_img="/images/projects/bestforlb/bestfor.webp"
                    image_bg="white"
                    project_details="Our journey started back in 2017 with a clear vision towards the love for health, fitness and nature. Our brand is a USDA organic & ISO approved globally. We are passionate about creativity and colors, Ole nutrients full range of superfoods are perfect for daily consumption which are gluten free, vegan friendly and 100% natural."
                    project_skills="magento2,php,mysql,e-commerce"
                />
                <ProjectCard
                    title="Cedar roots"
                    image_scalable_class="scalable_img"
                    project_url="https://cedarroots.shop/"
                    project_img="/images/projects/cedarroots/cedarroots.webp"
                    image_bg="white"
                    project_details="Our journey started back in 2017 with a clear vision towards the love for health, fitness and nature. Our brand is a USDA organic & ISO approved globally. We are passionate about creativity and colors, Ole nutrients full range of superfoods are perfect for daily consumption which are gluten free, vegan friendly and 100% natural."
                    project_skills="magento2,php,mysql,e-commerce"
                />
                <ProjectCard
                    title="Zodaya e-commerce"
                    image_scalable_class="scalable_img"
                    project_url="http://www.zodaya.com/"
                    project_img="/images/projects/zodaya/zodaya.webp"
                    image_bg="white"
                    project_details="Our journey started back in 2017 with a clear vision towards the love for health, fitness and nature. Our brand is a USDA organic & ISO approved globally. We are passionate about creativity and colors, Ole nutrients full range of superfoods are perfect for daily consumption which are gluten free, vegan friendly and 100% natural."
                    project_skills="magento2,php,mysql,e-commerce"
                />
                <ProjectCard
                    title="Keep Property"
                    project_img={keep_property_logo}
                    project_url="http://www.keep-property.com/"
                    image_bg="white"
                    project_details={`Keep Property is a leading property management company. Our aim is to KEEP select real estates in prime condition by executing effective property management procedures and providing excellent quality workmanship.
             A superior commercial or residential building must be kept highly presentabe if it's to maintain a first-rate image. This helps to retain a property's value, ensures its safety, and the well being of its occupants.`}
                    project_skills="framework7,cordova,yii2,php,mysql,android,ios,firebase"
                    project_screenshot="keep_property/login.webp,keep_property/home.webp,keep_property/dues.webp,keep_property/properties.webp,keep_property/real_estate.webp"
                    push_images_func={handleModalImages}
                />
                <ProjectCard
                    title="Pepsi Lebanon"
                    project_img={pepsi_lebanon_logo}
                    image_bg="#092847"
                    project_url="https://pepsilebanon.com/"
                    project_details="The company has known considerable success and has grown significantly in over 60 years of operation. In 2001, SMLC made a strategic alliance with PepsiCo which enlarged the shareholders' base of SMLC, with the majority of the SMLC shares remaining with the Assaf family. Since 2001, a number of brands were gradually added to SMLC's portfolio, these include: Tropicana, Mr.Juicy, Lipton Ice Tea, Gatorade, AMP, H2Oh! , and Aquafina mineral water."
                    project_skills="framework7,cordova,yii2,php,mysql,magento 1,e-commerce,mobile"
                    project_screenshot="pepsi_lebanon/home.webp,pepsi_lebanon/categories.webp,pepsi_lebanon/subcategories.webp,pepsi_lebanon/shop.webp,pepsi_lebanon/profile.png,pepsi_lebanon/orders.webp"
                    push_images_func={handleModalImages}
                />
                <ProjectCard
                    title="Zakey Customer"
                    image_bg="#009f00"
                    project_img={zakey_customer_logo}
                    project_url="https://zakey.app/"
                    project_details="Zakey's mission is to encourage vendors in Qatar and the MENA region to offer their near expiry products, overstock, aging stock and surplus at a lower price enabling families and individuals to benefit from them instead of feeding landfills! At Zakey we are working on bringing people together from the hospitality industry, retail and food services sectors as well as pharmacies, and beauty industry with the support of governmental institutions and consumers to take an active step towards zero waste."
                    project_skills="framework7,cordova,yii2,php,mysql,android,ios,firebase"
                    project_screenshot="zakey/home.webp,zakey/categories.webp,zakey/single.webp"
                    push_images_func={handleModalImages}
                />
                <ProjectCard
                    title="Zakey Supplier"
                    image_bg="#009f00"
                    project_img={zakey_customer_logo}
                    project_url="https://zakey.app/"
                    project_details="Zakey's mission is to encourage vendors in Qatar and the MENA region to offer their near expiry products, overstock, aging stock and surplus at a lower price enabling families and individuals to benefit from them instead of feeding landfills! At Zakey we are working on bringing people together from the hospitality industry, retail and food services sectors as well as pharmacies, and beauty industry with the support of governmental institutions and consumers to take an active step towards zero waste."
                    project_skills="framework7,cordova,yii2,php,mysql,android,ios,firebase"
                    project_screenshot="zakey/supplier/flash.webp,zakey/supplier/categories.webp,zakey/supplier/add.webp"
                    push_images_func={handleModalImages}
                />
                <ProjectCard
                    title="Tree Treat"
                    project_img={tree_treat_logo}
                    image_bg="white"
                    // project_url=""
                    project_details="The company has known considerable success and has grown significantly in over 60 years of operation. In 2001, SMLC made a strategic alliance with PepsiCo which enlarged the shareholders' base of SMLC, with the majority of the SMLC shares remaining with the Assaf family. Since 2001, a number of brands were gradually added to SMLC's portfolio, these include: Tropicana, Mr.Juicy, Lipton Ice Tea, Gatorade, AMP, H2Oh! , and Aquafina mineral water."
                    project_skills="framework7,cordova,yii2,php,mysql,mobile"
                    project_screenshot="tree-treat/login.webp,tree-treat/home.webp,tree-treat/single.webp,tree-treat/my_trees.webp"
                    push_images_func={handleModalImages}
                />
                {!is_mobile && (
                    <Modal
                        className="top-0 bottom-0 left-0 right-0 w-3/4 mx-auto my-auto h-3/4 bg-transparent"
                        show={openModal}
                        size="4xl"
                        onClose={() => setOpenModal(false)}
                        position="center"
                        popup
                    >
                        <Modal.Header className=" bg-gray-200 rounded-t-lg" />
                        <Modal.Body className=" bg-gray-200 rounded-b-lg">
                            <Swiper
                                // spaceBetween={50}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                // onSlideChange={() => console.log("slide change")}
                                // onSwiper={(swiper) => console.log(swiper)}
                                modules={[
                                    Navigation,
                                    //  Pagination,
                                    Zoom,
                                    Scrollbar,
                                    Mousewheel,
                                    A11y,
                                ]}
                                scrollbar={{ draggable: true }}
                                zoom={true}
                                mousewheel={true}
                                navigation
                            >
                                {ModalImgs &&
                                    ModalImgs?.map((img, index) => (
                                        <SwiperSlide key={index} className="flex-important items-center justify-center">
                                            <div className="swiper-zoom-container">
                                                <img
                                                    loading="lazy"
                                                    srcSet={`/images/projects/` + img}
                                                    alt="Project screenshot"
                                                    className="h-[25rem] w-100 object-contain p-[1rem]"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </Modal.Body>
                    </Modal>
                )}
            </section>
            <section id="experience" className="mt-20 xs:mt-10">
                <div className="font-bold mb-5 pt-2 text-2xl">Experience</div>
                <ExperienceCard
                    from="Dec 2024"
                    to="Present"
                    title="Staff Software Engineer . iSolution | Riyadh, Saudi Arabia"
                    company_url="https://www.ismena.com/"
                    position="Google cloud | google maps partner"
                    position_details={
                        <ul className="list-none space-y-2">
                            <li>✔️ Built a Laravel-based chatbot with Azure SSO, webhook integration, Redis caching, and Docker containerization for scalable deployment.</li>
                            <li>✔️ Migrated 40+ domains including all site content, email configurations, and DNS records with zero downtime.</li>
                            <li>✔️ Developed a Vercel-like deployment platform in Laravel with Git provider sign-ins, repo listing, and dynamic Docker-based project cloning.</li>
                            <li>✔️ Led the SonarQube SaaS platform by building a headless CMS with Laravel + Filament. Set up the Next.js environment with TypeScript and Zustand, and consistently supported the frontend developers with ongoing technical guidance throughout the entire development process.</li>
                            <li>✔️ Automated full instance provisioning using ArgoCD and kubectl, returning production-ready environments upon subscribing.</li>
                            <li>✔️ Engineered a zero-touch CI/CD pipeline for UnifyAi SaaS GKE using Terraform, Github Actions and Laravel, with real-time webhook status monitoring in a Filament CMS.</li>
                            <li>✔️ Designed and developed a fully functional Laravel package from scratch, adhering to best practices in modular architecture, testing, and versioning packaged for seamless integration and reusability across multiple projects.</li>
                        </ul>
                    }
                    position_skills="Laravel, Next.js, Google Cloud Platform (GCP), Azure DevOps Server, Typescript, Reddis, ArgoCD, Docker, Terraform AI, Github Workflow"
                />
                <ExperienceCard
                    from="Jan 2024"
                    to="Dec 2024"
                    title="Senior Full Stack Engineer . LEXZUR | Beirut, Lebanon"
                    company_url="https://www.lexzur.com/"
                    position="Senior Full Stack Engineer"
                    position_details={
                        <ul className="list-none space-y-2">
                            <li>✔️ Contributed to the development and enhancement of Lexzur's legal technology platform.</li>
                            <li>✔️ Designed and developed backend functionalities to support legal workflows, document handling, and system integrations.</li>
                            <li>✔️ Collaborated closely with product managers and stakeholders to translate legal domain requirements into scalable technical solutions.</li>
                            <li>✔️ Improved existing modules by refactoring code, enhancing performance, and ensuring maintainability across the platform.</li>
                            <li>✔️ Participated in debugging, testing, and deploying updates to ensure platform stability and reliability.</li>
                        </ul>
                    }
                    position_skills="Laravel, CodeIgniter, Vue.js"
                />
                <ExperienceCard
                    from="Jan 2024"
                    to="Dec 2024"
                    title="Senior Back End Developer . Endspace Mena | Beirut, Dbayeh"
                    company_url="https://endspacemena.com"
                    position="Senior Back End Developer"
                    position_details={
                        <ul className="list-none space-y-2">
                            <li>✔️ Led and enhanced the performance of GraySync system by optimizing MySQL queries, implementing caching, and reducing unnecessary joins.</li>
                            <li>✔️ Strengthened the security by identifying and resolving critical vulnerabilities.</li>
                            <li>✔️ Refactored and streamlined the codebase for improved efficiency and maintainability.</li>
                            <li>✔️ Modernized the frontend by transitioning to Next.js, Next Auth with TypeScript, Tailwind CSS.</li>
                            <li>✔️ Used Zustand as a state management while preserving the Yii2 PHP framework for backend and APIs.</li>
                        </ul>
                    }
                    position_skills="Team Leadership, Yii2, Next.js, Flutter"
                />

                <ExperienceCard
                    from="Feb 2022"
                    to="present"
                    title="Full-Stack Developer . Codendot | Tripoli, Al Mina"
                    company_url="https://www.codendot.com"
                    position="Mid Senior Full-Stack Developer"
                    position_details={
                        <ul className="list-none space-y-2">
                            <li>✔️ Specialised in implementing Automated facility management solutions such as E-maintain (Pepsi Lebanon), Fibrex using the Yii2 PHP Framework, MySQL including Cron Jobs, AI integrations, Complex queries, Dashboard Analytics.</li>
                            <li>✔️ Built Ecommerce websites such as ALMawi, Zmerly, CedarRoots, OleNutrients, BestFor LB… using the Magento PHP Framework.</li>
                            <li>✔️ Developed Mobile applications such as Tree Treat, Keep Property, Pepsi Lebanon, Pepsi B2B, Zakey Customer, Zakey Supplier… using Cordova, Framework7, React Native, Expo, Firebase push notifications.</li>
                            <li>✔️ Deployed backend systems on cPanel, published mobile apps on Google Play and App Store.</li>
                        </ul>
                    }
                    position_skills="yii2,framwork7,cordova,mysql,magento,wordpress"
                />
                <ExperienceCard
                    from="jan 2020"
                    to="june 2022"
                    title="Full-stack Developer . Freelance | Lebanon"
                    position="Full-stack Developer"
                    position_details="Established a POS system for Saxon, including database architecture, stock management, CRUD for customers, employee management, transactions, sales, barcode integration, receipt printing, and various reports like daily cashier and sales reports. Developed an AI chatbot that prompts users to upload a PDF and then answers diverse questions about its content. This solution integrates the Yii2 PHP framework with Python's NLTK for NLP, using tokenization, Flask, pipeline automation, Auto Tokenizer, and AutoModelForQuestionAnswering to ensure accurate and relevant responses. Built personal applications using Flutter, Angular, Vue js, React, React native, Redux, Firebase, Nodejs, Express, MongoDB, and many more technologies."
                    position_skills="Next js,Firebase,React native,Flutter,Vue js,Mongo db,Dart"
                />
            </section>
            <section id="resume" className="mt-20 xs:mt-10">
                <a href={CV} className="font-semibold flex gap-2 items-center">
                    View Full Resume
                </a>
            </section>
            <section id="contact" className="mt-20 xs:mt-10">
                <Contact />
            </section>
        </div>
    );
};

export default Right;
