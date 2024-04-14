import React from "react";

interface ModalProps {
  name: string;
  thumbnail: string;
  complexity: number;
  minPlayers: number;
  maxPlayers: number;
  avgSize: string;
}

const Modal: React.FC<ModalProps> = ({
  name,
  thumbnail,
  complexity,
  minPlayers,
  maxPlayers,
  avgSize,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  // parse average size of game and convert to pixels
  const parseSize = (size: string) => {
    const [widthInches, heightInches] = size
      .toLowerCase()
      .split("x")
      .map((dim) => parseFloat(dim));
    const inchesToPixels = 2; // Conversion factor: 1 inch = 2 pixels
    return {
      width: widthInches * inchesToPixels,
      height: heightInches * inchesToPixels,
    };
  };

  // Calculate the size of the rectangle
  // 50px = 1 foot, so 300px would be 6 feet
  const { width, height } = parseSize(avgSize);
  const xOffset = (300 - width) / 2; // Center the rectangle horizontally
  const yOffset = (150 - height) / 2; // Center the rectangle vertically

  const topBottomChairWidth = 62;
  const topBottomchairHeight = 62;

  const sideChairWidth = 62;
  const sidechairHeight = 62;

  return (
    <>
      <button
        className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        See more info
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-7xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">{name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-gray-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-col flex justify-around items-center">
                  <div className="w-full pb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-purple-900 font-semibold mr-1">
                        Complexity:
                      </span>
                      <span className="text-gray-800">{complexity}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-purple-900 font-semibold mr-1">
                        Players:
                      </span>
                      <span className="text-gray-800">
                        {minPlayers} - {maxPlayers}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-900 font-semibold mr-1">
                        Size:
                      </span>
                      <span className="text-gray-800">{avgSize}</span>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    <svg
                      width="385"
                      height="235"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      {/* Chairs around the table */}
                      {/* Left and right chairs, centered vertically */}
                      <rect
                        x="5"
                        y={40 + 150 / 2 - sidechairHeight / 2}
                        width={sideChairWidth}
                        height={sidechairHeight}
                        fill="#191e31"
                      />
                      <rect
                        x="315"
                        y={40 + 150 / 2 - sidechairHeight / 2}
                        width={sideChairWidth}
                        height={sidechairHeight}
                        fill="#191e31"
                      />
                      {/* Top and bottom chairs, centered at 0.25 and 0.75 width proportions */}
                      <rect
                        x={40 + 0.25 * 300 - topBottomChairWidth / 2}
                        y="5"
                        width={topBottomChairWidth}
                        height={topBottomchairHeight}
                        fill="#191e31"
                      />
                      <rect
                        x={40 + 0.75 * 300 - topBottomChairWidth / 2}
                        y="5"
                        width={topBottomChairWidth}
                        height={topBottomchairHeight}
                        fill="#191e31"
                      />
                      <rect
                        x={40 + 0.25 * 300 - topBottomChairWidth / 2}
                        y="165"
                        width={topBottomChairWidth}
                        height={topBottomchairHeight}
                        fill="#191e31"
                      />
                      <rect
                        x={40 + 0.75 * 300 - topBottomChairWidth / 2}
                        y="165"
                        width={topBottomChairWidth}
                        height={topBottomchairHeight}
                        fill="#191e31"
                      />

                      {/* Table */}
                      <rect //rectangle representing the table
                        x="40" // Offset for chair placement
                        y="40" // Offset for chair placement
                        width="300" //6 feet, avg table width
                        height="150" //3 feet, avg table length
                        fill="#6b4e34" // Brown rectangle
                      />

                      {/* Boardgame */}
                      <rect
                        x={40 + xOffset} //40 for the chairs
                        y={40 + yOffset} //40 for the chairs
                        width={width}
                        height={height}
                        fill="#581c87" // Color of the item on the table
                      />
                    </svg>
                  </div>

                  {/* <svg width="400" height="200">
                    <rect
                      x={200 - 72}
                      y="10"
                      rx="6"
                      ry="6"
                      width="144"
                      height="144"
                      fill="#16a34a" //green rectangle
                    />
                  </svg> */}
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button 
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> 
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
