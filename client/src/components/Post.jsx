import React from "react";

const Post = () => {
  return (
    <div>
      <div class="flex justify-center">
        <div class="flex flex-col justify-center">
          <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div class="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
              <div class="flex flex-col md:flex-row items-center">
                <div class=" w-full overflow-hidden">
                  {" "}
                  <img
                    // src="https://source.unsplash.com/700x350/?city"
                    src="images/national.jpg"
                    alt=""
                    class=""
                  />{" "}
                </div>
                <div class="md:w-2/3 m-4 ">
                  <div class="flex text-gray-500 text-sm m-2">
                    <div class="m-1 font-bold">Vlog,</div>
                    <div class="m-1">31 March, 2023</div>
                  </div>
                  <div class="font-bold text-black text-xl m-2">
                    The 8 Best City Lights In The World!{" "}
                  </div>
                  <div class="text-sm text-gray-500 mt-4 m-2">
                    <a href="#">
                      There's something about city lights that make them so
                      captivating and romantic. Maybe it's because they remind
                      us of all the possibilities that exist in the world, or
                      maybe it's because they're just so darn pretty to look at.
                      No matter what the reason is, there's no denying that city
                      lights are some of the most beautiful things in the world.
                    </a>
                  </div>
                  <div class="flex cursor-pointer">
                    <div class="m-2">
                      {" "}
                      <img
                        src="https://source.unsplash.com/50x50/?man"
                        alt=""
                        class=" rounded-full"
                      />{" "}
                    </div>
                    <div class="grid m-1">
                      <div class="font-bold text-sm hover:text-gray-600 mt-2">
                        Jason Bourne
                      </div>
                      <div class=" text-sm hover:text-gray-600">
                        Student, Los Angeles
                      </div>
                    </div>
                  </div>
                  <section>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro laborum praesentium et veritatis blanditiis ipsa
                      repudiandae, deleniti nisi labore aliquam obcaecati fugiat
                      natus totam dolor. Hic excepturi voluptatibus soluta
                      animi. Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Cum delectus maiores optio quidem consequuntur
                      ducimus, est modi ab in accusantium quas quisquam cumque
                      aliquam! Perspiciatis mollitia explicabo fugiat hic neque!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia nisi sit quia? Esse ab dolor dolorem in
                      necessitatibus fuga quas ratione sunt nulla praesentium
                      quia, fugit exercitationem. Quae, iure eius.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm text-gray-500 mt-2 mx-9 flex flex-col md:flex-row max-w-5xl justify-center items-center ml-80">
        <p>
          เมื่อเราต้องการความมั่นคงในชีวิต Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti delectus reprehenderit
          laboriosam tenetur voluptates, ullam vero, autem, aliquid quae odio
          commodi tempora fuga exercitationem eius ea debitis dolores nostrum
          maiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sequi neque alias, soluta odit ipsum rerum aspernatur libero, quam
          iusto sit nihil minima ea totam harum perferendis praesentium
          molestiae cumque quas! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Non provident laborum at neque consequuntur eum
          architecto itaque magni! Eaque officia eum ipsum animi quos, officiis
          dignissimos expedita voluptate modi assumenda?
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
            adipisci sit animi voluptatum aliquid, expedita quos eveniet,
            perspiciatis veniam, esse commodi neque nulla? Quisquam officiis
            unde illum praesentium quos?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
            adipisci sit animi voluptatum aliquid, expedita quos eveniet,
            perspiciatis veniam, esse commodi neque nulla? Quisquam officiis
            unde illum praesentium quos?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
            adipisci sit animi voluptatum aliquid, expedita quos eveniet,
            perspiciatis veniam, esse commodi neque nulla? Quisquam officiis
            unde illum praesentium quos?
          </li>
          <p className="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            quos, incidunt dolore voluptas voluptatem, numquam inventore,
            placeat nam quae tempora corporis. Commodi, laborum! Aspernatur
            asperiores suscipit laudantium architecto voluptates. Voluptates.
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate facilis placeat debitis dicta itaque. Illum quasi error
              officiis fuga id alias facere dolor accusantium, ipsam, porro
              ullam praesentium provident minus.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate facilis placeat debitis dicta itaque. Illum quasi error
              officiis fuga id alias facere dolor accusantium, ipsam, porro
              ullam praesentium provident minus.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate facilis placeat debitis dicta itaque. Illum quasi error
              officiis fuga id alias facere dolor accusantium, ipsam, porro
              ullam praesentium provident minus.
            </li>
          </p>
        </p>
      </div>

      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Post;
