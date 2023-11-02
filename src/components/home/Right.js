import React from "react";
import ExperienceCard from "../cards/ExperienceCard";
import CV from "../../assets/my_cv.pdf";
import ProjectCard from "../cards/ProjectCard";

// IMAGES
import almawi_img from "../../images/projects/almawi/almawi.png";
import zmerly_img from "../../images/projects/zmerly/zmerly.png";
import zakey_customer_logo from "../../images/projects/zakey/customer/logo.png";
import pepsi_lebanon_logo from "../../images/projects/pepsi_lebanon/logo.png";
import keep_property_logo from "../../images/projects/keep_property/logo.png";
import ole_logo from "../../images/projects/ole_nutrients/ole_full.png";
import tree_treat_logo from "../../images/projects/tree-treat/logo.webp";

const Right = () => {
  return (
    <div className="right_scrollable_section w-3/5 lg-break:w-full">
      <section id="about">
        {/* <text className="text-muted text-sm mb-10 h-128">- Introduction</text> */}
        <br />
        <div className="text-lg">
          <span>Mid-Senior</span>
          <br />
          <span>Full-Stack Developer</span>
        </div>

        <div className="summary text-lg xl:text-base text-muted mt-2 ">
          Experienced Full-Stack Developer with a strong background in
          designing, developing, and maintaining web applications using a
          diverse range of programming languages and frameworks. Proficient in
          optimizing database schemas, ensuring cross-platform responsiveness,
          and integrating mobile technologies to enhance user experiences. Adept
          at utilizing version control systems and debugging tools to deliver
          high-quality solutions. Committed to continuous learning and growth in
          the ever-evolving tech landscape.
        </div>
      </section>
      <section id="experience" className="mt-20">
        <ExperienceCard
          from="Feb 2022"
          to="present"
          title="Full-Stack Developer . Codendot | Tripoli, Al Mina"
          company_url="https://www.codendot.com"
          position="Mid Senior Full-Stack Developer"
          position_details="Developed and maintained front-end/back-end web applications using a variety of languages and frameworks, including HTML, JavaScript, PHP, YII2, Magento and jQuery. Utilized MySQL, Firebase databases for efficient data storage, retrieval, and schema optimization for performance and scalability. Ensured cross-platform optimization and mobile responsiveness using CSS, SCSS, LESS, Bootstrap5, and Tailwind CSS for styling. Integrated mobile technologies such as React Native, Android Studio, Flutter, Cordova, Expo, and Framework7 to enhance mobile experiences. Employed version control systems like GitHub and GitLab for efficient collaboration and version management. Monitored and troubleshooted performance issues, utilizing debugging tools, advanced code logic, and tracking network requests. Integrated comprehensive work order management, role-based permissions, and team management functionalities based on project requirements to ensure efficient workflows"
          position_skills="yii2,framwork7,cordova,mysql,magento,wordpress"
        />
        <ExperienceCard
          from="jan 2020"
          to="june 2022"
          title="Full-stack Developer . Freelance | Lebanon"
          position="Full-stack Developer"
          position_details="Wrote well-designed, testable, and efficient code using web development best practices. Created basic website layouts and user interfaces, integrating data from various back- end web services and databases. Integrated data from various back-end web services and databases, ensuring cross- browser compatibility of new features. Created and maintained software documentation, ensuring clear and up-to-date records. Collaborated with web designers to realize visual design intent and ensured responsive design across devices. Advocated for automation, Test Driven Development (TDD), Continuous Integration (CI), and Continuous Delivery (CD) to enhance product quality and detect bugs at an early stage"
          position_skills="reactjs,angular,shopify,firebase,react native,flutter,vue js,mongo db,liquid,dart"
        />
        <ExperienceCard
          from="Jan 2020"
          to="June 2021"
          title="Project Coordinator . Lamar Jewelry | Tripoli, Koura"
          position="Project Coordinator"
          position_details="Coordinated the implementation and customization of the Odoo point-of-sale system. Utilized Odoo functionalities to handle customer service, inquiries, and sales transactions. Conducted inventory management, meticulously organizing products based on item codes within the Odoo system. Leveraged Odoo's capabilities to provide clients with comprehensive product information, optimizing the overall customer experience. Collaborated closely with the development team to enhance the Odoo point-of-sale module for more efficient sales operations, thereby contributing to the successful achievement of sales targets."
          position_skills="odoo,management"
        />
      </section>
      <section id="resume" className="mt-20">
        <a href={CV} className="font-semibold flex gap-2 items-center">
          View Full Resume
        </a>
      </section>
      <section id="projects" className="mt-20">
        <ProjectCard
          title="Almawi Home Appliances"
          project_img={almawi_img}
          image_bg="rgb(59 118 178)"
          project_details="Our online portal is a one-stop service solution for all of your appliances, it diagnoses and estimates the repair service fee and the cost upfront. Our goal is to inform the consumers about the possibility of repairing the purchased product and to contribute to greater environmental awareness and sustainable practices."
          project_skills="magento2,php,mysql,e-commerce"
        />
        <ProjectCard
          title="Zmerly Shop"
          project_img={zmerly_img}
          image_bg="#f7793c"
          project_details="ZMERLY & CO owes the success largely to our exceptional proximity to our customers when it comes to research and development, engineering, design, quality assurance, production and marketing.  Our development strategy is based on over 28 years of experience, promotion of innovations and a constant search for newer and better solutions. "
          project_skills="magento2,php,mysql,e-commerce"
        />
        <ProjectCard
          title="Ole Nutrients"
          project_img={ole_logo}
          image_bg="white"
          project_details="Our journey started back in 2017 with a clear vision towards the love for health, fitness and nature. Our brand is a USDA organic & ISO approved globally. We are passionate about creativity and colors, Ole nutrients full range of superfoods are perfect for daily consumption which are gluten free, vegan friendly and 100% natural."
          project_skills="magento2,php,mysql,e-commerce"
        />
        <ProjectCard
          title="Keep Property"
          project_img={keep_property_logo}
          project_url="http://www.keep-property.com/"
          image_bg="white"
          project_details="Keep Property is a leading property management company. Our aim is to KEEP select real estates in prime condition by executing effective property management procedures and providing excellent quality workmanship.
             A superior commercial or residential building must be kept highly presentabe if it’s to maintain a first-rate image. This helps to retain a property’s value, ensures its safety, and the well being of its occupants."
          project_skills="framework7,cordova,yii2,php,mysql,android,ios,firebase"
        />
        <ProjectCard
          title="Pepsi Lebanon"
          project_img={pepsi_lebanon_logo}
          image_bg="white"
          project_url="https://pepsilebanon.com/"
          project_details="The company has known considerable success and has grown significantly in over 60 years of operation. In 2001, SMLC made a strategic alliance with PepsiCo which enlarged the shareholders’ base of SMLC, with the majority of the SMLC shares remaining with the Assaf family. Since 2001, a number of brands were gradually added to SMLC’s portfolio, these include: Tropicana, Mr.Juicy, Lipton Ice Tea, Gatorade, AMP, H2Oh! , and Aquafina mineral water."
          project_skills="framework7,cordova,yii2,php,mysql,magento 1,e-commerce,mobile"
        />
         <ProjectCard
          title="Zakey Customer"
          project_img={zakey_customer_logo}
          project_url="https://zakey.app/"
          project_details="Zakey’s mission is to encourage vendors in Qatar and the MENA region to offer their near expiry products, overstock, aging stock and surplus at a lower price enabling families and individuals to benefit from them instead of feeding landfills! At Zakey we are working on bringing people together from the hospitality industry, retail and food services sectors as well as pharmacies, and beauty industry with the support of governmental institutions and consumers to take an active step towards zero waste."
          project_skills="framework7,cordova,yii2,php,mysql,android,ios,firebase"
        />
          <ProjectCard
          title="Tree Treat"
          project_img={tree_treat_logo}
          image_bg="white"
          project_url="https://pepsilebanon.com/"
          project_details="The company has known considerable success and has grown significantly in over 60 years of operation. In 2001, SMLC made a strategic alliance with PepsiCo which enlarged the shareholders’ base of SMLC, with the majority of the SMLC shares remaining with the Assaf family. Since 2001, a number of brands were gradually added to SMLC’s portfolio, these include: Tropicana, Mr.Juicy, Lipton Ice Tea, Gatorade, AMP, H2Oh! , and Aquafina mineral water."
          project_skills="framework7,cordova,yii2,php,mysql,magento 1,e-commerce,mobile"
        />
      </section>
    </div>
  );
};

export default Right;
