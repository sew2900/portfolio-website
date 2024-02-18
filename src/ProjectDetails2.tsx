import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}
function ProjectDetails2() {
  return (
    <div className="content-container padding-16 display-block">
      <div className="list-item-tags-container">
        <div className="list-item-tags">
          <div className="tag">
            <p className="small">Java</p>
          </div>
          <div className="tag">
            <p className="small">Angular</p>
          </div>
          <div className="tag">
            <p className="small">Typescript</p>
          </div>
          <div className="tag">
            <p className="small">MySQL</p>
          </div>
        </div>

        <div>
          <div className="tag">
            <p className="small accent-color">
              <FontAwesomeIcon icon={faCrown} />
            </p>
          </div>
        </div>
      </div>
      <h3 className="accent-color">E-Commerce app</h3>
      <div className="margin-top-16 full-width align-right">
        <CustomLink href={"/portfolio-website/Projects"}>
          <p className="btn btn-main-accent">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </p>
        </CustomLink>
      </div>
      <hr className="hr-space"></hr>
      <div className="details-container margin-top-16">
        <div className="details-item">
          <p className="bold">Description</p>
          <p>
            Java server, Stripe payments, Okta user login/logout, SQL database
            (user information, products list, orders), CRUD operations on
            shopping cart, products sorting and text searching, generated custom
            SSL certificate, Angular frontend
          </p>
          <br />
          <p className="bold">Technologies</p>
          <ul>
            <li>Server</li>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
            </ul>
            <li>Database</li>
            <ul>
              <li>MySQL</li>
            </ul>
            <li>Frontend</li>
            <ul>
              <li>Angular</li>
              <li>Typescript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </ul>
          <br />
          <p className="bold">Code availability</p>
          <p>
            I'm sharing the code for this project. If you want to try it by
            yourself you need to open read-me files with instruction.
          </p>
          <div className="margin-top-16 full-width align-right">
            <a
              href="https://gitfront.io/r/seweryn3129/Qtdwaim219rm/ecommerce/"
              target="blank"
            >
              <p className="btn btn-main-accent">repository link</p>
            </a>
          </div>

          <br />
          <p className="bold">Functionalities:</p>
          <ul>
            <li>Display a list of products from the database.</li>
            <li>Add products to the shopping cart.</li>
            <li>
              Implement CRUD operations for the shopping cart (Create, Read,
              Update, Delete).
            </li>
            <li>Perform shopping cart checkout.</li>
            <li>Include user login/logout security.</li>
            <li>Track previous orders for logged-in users.</li>
          </ul>

          <br />
          <p className="bold">More details:</p>
          <ul>
            <li>
              Display application name (TheShop) and a search bar on the home
              page.
            </li>
            <li>
              Show shopping cart status on the right side of the home page.
            </li>
            <li>
              Provide categorization options on the left side of the home page.
            </li>
            <li>
              Main content panel to display product list items on the home page.
            </li>
            <li>
              Pagination feature at the bottom of the product list on the home
              page.
            </li>
            <li>
              Show detailed information about a selected product on the product
              details page.
            </li>
            <li>
              Display title, subtitle, price, and description of the selected
              product on the product details page.
            </li>
            <li>
              Option to add the product to the cart from the product details
              page.
            </li>
            <li>
              List all items in the shopping cart on the shopping cart details
              page.
            </li>
            <li>
              Perform operations like quantity adjustment and removal of items
              from the shopping cart details page.
            </li>
            <li>
              Display subtotals and overall totals on the shopping cart details
              page.
            </li>
            <li>
              Provide a checkout button on the shopping cart details page.
            </li>
            <li>Collect standard customer information on the checkout page.</li>
            <li>Gather credit card information on the checkout page.</li>
            <li>
              Allow users to review their order before finalizing the purchase
              on the checkout page.
            </li>
            <li>
              Include a purchase button to complete the checkout process on the
              checkout page.
            </li>
          </ul>
        </div>
        <div className="details-item">
          <p className="bold">Preview</p>
          <img className="details-image" src="theshop.png" alt="" />
        </div>
      </div>
    </div>
  );
}
function CustomLink({ href, children }: CustomLinkProps) {
  return <a href={href}>{children}</a>;
}
export default ProjectDetails2;
