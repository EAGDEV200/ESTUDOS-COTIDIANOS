import "./Title.css";

export default function Title({title,text}) {
    return (
        <div class="container">
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">{title}</h1>
                <p class="lead">{text}</p>
            </div>
        </div>
    )
}