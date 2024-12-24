import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('../client/page'), {});

export default function Dynamic() {
    return (
        <div>
            <h1>HI aku merupakan component dynamic</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro ab non commodi sint consequatur quisquam officia, officiis vero necessitatibus nemo asperiores reprehenderit repellat amet unde, molestias ullam perferendis. Iste?</p>
            <br />
            <DynamicComponent />
        </div>
    )
}