const CakeShop = () => {
  return (
    <div
      className="bg-cover bg-center h-screen relative px-20 mx-auto"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/jDwQ3rz/1600w-1-QK0-IS-7s-D0.webp')",
      }}
    >
      <div className="text-center bg-white p-20 absolute mt-64 text-black">
        <h2 className="text-4xl font-bold mb-4">Cake Shop</h2>
        <p className="text-lg">
          The Cake Bake Shop is one of the best restaurants in the Indianapolis
          area and everyone should go to it or experience it once in their life.
          It has an incredible atmosphere, wonderful service, amazing food, and
          it is in a great location.
        </p>
      </div>
    </div>
  );
};

export default CakeShop;
