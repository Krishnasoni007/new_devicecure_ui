import React, { memo, useEffect, useState } from "react";

const banners = [
  {
    link: "/1.png",
  },
  {
    link: "/2.png",
  },
  {
    link: "/3.png",
  },
  {
    link: "/4.png",
  },
];

export default memo(function Banner() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!hover) {
      const len = banners.length - 1;
      const tm = setInterval(() => {
        setActive((val) => {
          if (val == len) return 0;
          return val + 1;
        });
      }, 2000);
      console.log(active);
      return () => {
        clearInterval(tm);
      };
    }
  }, [hover]);

  const onMouseOver = (ind) => {
    setHover(true);
    setActive(ind);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="options">
      {banners.map(({ link }, ind) => {
        return (
          <div
            key={ind}
            onMouseOver={() => {
              onMouseOver(ind);
            }}
            {...{ onMouseLeave }}
            className={`option ${ind == active ? "active" : ""} `}
            style={{
              background: `url(${link})no-repeat center center/cover`,
            }}
          ></div>
        );
      })}
    </div>
  );
});
