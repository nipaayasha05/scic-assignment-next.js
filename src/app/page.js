import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-600 btn btn-primary">eoreoreworq</h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure></figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
