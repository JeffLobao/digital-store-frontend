











import PropTypes from "prop-types"
import styled from "styled-components";
import Button from "./buttons/Buttons";
import { Link } from "react-router-dom";

const Highlights1WrapperContainer = styled.div`
* {
    margin: 0;
}

    display: flex;
    flex-direction: column;
    margin: 42px 0px 40px;
    gap: 10px;
    height: fit-content;

    @media (min-width: 768px) {
        margin: 38px 0 100px;
        width: calc(100% - 13.88%);
    }

    & .colections{
        color: var(--dark-gray-2);
        align-self: flex-start;
    }

    & .cards-container{
        display: grid;
        grid-template-rows: repeat(auto-fit, 212px);
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 10px;

        @media (min-width: 768px) {
            gap: 12px;
            grid-template-rows: repeat(auto-fit, 251px);
            grid-template-columns: repeat(3, minmax(320px, 1fr));
        }

        & .item{
            background-color: #D8E3F2;
            border-radius: 8px;
            padding: 20px;
            position: relative;

            @media (min-width: 768px) {
                padding: 35px 0 35px 30px;
            }

            & .texts{
                display: flex;
                text-align: left;
                flex-direction: column;
                
                max-width: 194px;
                gap: 10px;

                @media (min-width: 768px) {
                    gap: unset;

                    & .keynote {
                        margin-top: 10px;
                        margin-bottom: 20px;
                    }
                }

                & .discount{
                background-color: #E7FF86;
                width: 90px;
                height: 32px;
                border-radius: 29px;
                display: flex;
                padding-inline: 12.27px;
                justify-content: space-between;
                align-items: center;
                z-index: 1;

                    & p{
                        color: var(--dark-gray-2);
                    }
                }

                & h3{
                    color: var(--dark-gray);
                    height: 72px;
                    z-index: 1;
                }

                & button {
                    width: 144px;
                    height: 48px;
                    z-index: 1;
                }
            }

            & .image {
                position: absolute;
                width: max-content;
                display: flex;
                justify-content: end;
                height: 100%;
                width: 190px;
                right: 0;
                top: 0;
                z-index: 0;

                @media (min-width: 768px) {
                    width: 242px;
                }

                & img {
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }
    }
`
const HighlightCard = (props) => {
    return (
        <div className={`item ${props.className}`}>
            <div className="texts">
                <div className="discount">
                    <p className="percentage text-extra-small bold">{props.discount}%</p>
                    <p className="text-extra-small bold">OFF</p>
                </div>
                <h3 className="keynote title-extra-small bold">
                    {props.title}
                </h3>
                <Link to="/produtos">
                    <Button buttonType="secondary-button" label={"Comprar"} className={"text-small bold"}></Button>
                </Link>
            </div>
            <div className="image">
                <img src={props.img} />
            </div>
        </div>
    )
}

HighlightCard.propTypes = {
    className: PropTypes.string,
    discount: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string
}

const Destaques1 = () => {
    return (
        <Highlights1WrapperContainer>
            <h3 className={`colections ${window.innerWidth >= 768 ? "text-large" : "text-small"} bold`}>Coleções em Destaque</h3>
            <div className="cards-container">
                <HighlightCard img="Highlight-shirt.svg" title="New drop Supreme" discount="30" />
                <HighlightCard img="Highlight-shoe.svg" title="Adidas Colection" discount="30" />
                <HighlightCard img="Highlight-headphone.svg" title="New Beats Bass" discount="30" />
            </div>
        </Highlights1WrapperContainer>
    );
}

export default Destaques1;