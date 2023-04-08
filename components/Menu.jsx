import Image from "next/image";

const Menu = ({ menuItems }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 max-w-[60%] mx-auto mt-10">
        {menuItems.map((menuItem) => {
          const { id, title, category, img, price, desc } = menuItem;
          return (
            <div
              key={id}
              className="border rounded-lg p-3 flex space-x-4 items-center"
            >
              <div className="object-cover">
                <Image
                  className="rounded-lg w-full"
                  src={img}
                  alt="images"
                  width={160}
                  height={160}
                />
              </div>
              <div className="">
                <h4 className="text-3xl text-white">{title}</h4>
                <p className="text-white">${price}</p>
                <p className="text-white">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
