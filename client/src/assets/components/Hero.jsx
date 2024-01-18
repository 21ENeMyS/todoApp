import HeroImage from "../../images/2152177.jpg";

const Hero = () => {
  return (
    <div className="container px-7 flex justify-between items-center ">
      <div className="w-11/12 flex justify-items-center flex-col pr-4">
        <h1 className="text-4xl font-display pb-3 font-semibold leading-12 capitalize text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          praesentium.
        </h1>
        <p className="font-body text-second">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          eius enim temporibus nesciunt sit. Reiciendis, aliquid est fugit natus
          ullam odit modi harum, voluptatem aliquam et adipisci pariatur, quis
          dolore non. Totam dolorum expedita temporibus perferendis consequatur,
          accusamus illo consectetur aliquam voluptates quaerat natus
          voluptatibus nobis corporis debitis velit perspiciatis ducimus beatae.
          Nemo, sunt repellat.
        </p>
        <div className="">
          <button className="px-4 py-2  ring-1 ring-inset ring-button rounded mt-4 hover:bg-button hover:text-highlight text-button">
            Create Todo list
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <img src={HeroImage} alt={"todolist"} />
      </div>
    </div>
  );
};

export default Hero;
