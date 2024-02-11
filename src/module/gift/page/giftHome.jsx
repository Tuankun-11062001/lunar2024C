import React, { useState } from "react";
import Decoration from "../../../common/components/decoration";
import backgroundContent from "../../../common/images/backgroundContent.png";
import backgroundContentVertical from "../../../common/images/backgroundContentVertical.png";
import egg1 from "../../../common/images/egg_1.png";
import egg2 from "../../../common/images/egg_2.png";
import egg3 from "../../../common/images/egg_3.png";
import egg4 from "../../../common/images/egg_4.png";
import dragon_2024 from "../../../common/images/dragon_2024.png";
import dragon_confident from "../../../common/images/dragon_confident.png";
import dragon_cry from "../../../common/images/dragon_cry.png";
import dragon_fat from "../../../common/images/dragon_fat.png";
import dragon_sleep from "../../../common/images/dragon_sleep.png";
import dragon_shy from "../../../common/images/dragon_shy.png";
import overlay from "../../../common/images/overlay.png";
import hasUser from "../../../common/images/has_user.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  editDragonThunk,
  findDragonThunk,
  getDragonsThunk,
  getRankThunk,
} from "../../../common/store/slices/dragonSlice";
import Loading from "../../../common/page/loading";
import rankImage from '../../../common/images/rank.svg';
import closeIamge from '../../../common/images/close.svg'

const GiftHome = () => {
  const dispatch = useDispatch();
  const [stateContent, setStateContent] = useState("first");
  const [wishLayout, setWishLayout] = useState(true);
  const [showDragon, setShowDragon] = useState(false);
  const eggs = [egg1, egg2, egg3, egg4];
  const { dragons, dragon, rank, loading } = useSelector((state) => state.dragon);
  const [showRank, setShowRank] = useState(false);
  useEffect(() => {
    dispatch(getDragonsThunk());
    dispatch(getRankThunk());
  }, []);

  const handleChangeContent = () => {
    const parent = document.querySelector(".content_first");
    parent.classList.add("fade");
    parent.addEventListener("transitionend", () => {
      setStateContent("second");
    });
  };

  const handleChangeLayout = () => {
    const parent = document.querySelector(".wish_first");
    console.log(parent);
    parent.classList.add("fade");
    parent.addEventListener("transitionend", () => {
      setWishLayout(false);
    });
  };

  const clickEgg = (dragon) => {
    console.log(dragon);
    dispatch(findDragonThunk(dragon._id));
    setShowDragon(!showDragon);
    dispatch(getDragonsThunk());
  };

  const handleRank = () => {
    setShowRank(!showRank);
  };

  return (
    <div className="gift">
      <Decoration />
      {wishLayout ? (
        <div className="wish_first">
          <div className="content">
            <h2>Lời chúc năm mới!</h2>
            <h1>2024</h1>
            {stateContent === "first" ? (
              <div className="content_first">
                <ol>
                  <li>
                    Chúc mừng năm mới 2024. Chúc gia đình hạnh phúc, tấn tài tấn
                    lộc, tấn an khang.
                  </li>
                  <li>
                    Năm hết Tết đến đón hên về nhà. Quà cáp bao la. Một nhà
                    không đủ. Vàng bạc đầy tủ. Gia chủ phát tài.
                  </li>
                  <li>
                    Năm mới chúc nhau sức khỏe nhiều. Bạc tiền rủng rỉnh thoải
                    mái tiêu. Happy New Year 2024!
                  </li>
                  <li>Năm mới, công việc như ý, giàu sang phú quý.</li>
                  <li>
                    Chúc Tết đến trăm điều như ý - Mừng xuân sang vạn sự thành
                    công.
                  </li>
                  <li>
                    Năm cũ qua đi, năm mới đã tới. Chúc bạn bầu trời sức khỏe,
                    biển cả tình thương, đại dương tình bạn, sự nghiệp sáng
                    ngời, gia đình thịnh vượng.
                  </li>
                </ol>
                <button onClick={handleChangeContent}>Tiếp theo</button>
              </div>
            ) : (
              <div className="content_second">
                <p>Vì túi tiền admin có hạn nên phần thưởng sẽ ít một chút</p>
                <p>Hy vọng rằng các bạn sẽ thích!</p>
                <button onClick={handleChangeLayout}>
                  Săn Rồng kiếm lúa đầu năm thôi
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="dragon_layout">
          <div className="dragons">
            <img src={backgroundContent} />
            <div className="content">
              {showRank ? (
                <div className="rank_mobile">
                  <div className="content">
                    <h1>Người may mắn</h1>
                    <div className="list_user">

                      {loading ? <Loading/> : rank?.map((user, indx) => (
                        <div>
                          <p>{indx + 1}</p>
                          <p>{user.username}</p>
                          <p>{user.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="content_dragon_list">
                  <h1>Chọn một bé rồng!</h1>
                  <div className="list_dragon">
                    {loading ? <Loading/> : dragons.map((dragon, index) => (
                      <>
                        {dragon.username ? (
                          <img src={hasUser} className="img_user" />
                        ) : (
                          <div
                            className="dragon"
                            onClick={() => clickEgg(dragon)}
                          >
                            <img
                              src={
                                eggs[Math.floor(Math.random() * eggs.length)]
                              }
                            />
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <button className="btn_rank" onClick={handleRank}>
            {showRank ? <img src={closeIamge}/> : <img src={rankImage}/>}
            
          </button>
          <div className="rank">
            <img src={backgroundContentVertical} />
            <div className="content">
              <h1>Người may mắn</h1>
              <div className="list_user">
                {loading ? <Loading/> : rank?.map((user, indx) => (
                  <div>
                    <p>{indx + 1}</p>
                    <p>{user.username}</p>
                    <p>{user.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {showDragon && <ShowDragon close={clickEgg} data={dragon} />}
    </div>
  );
};

const ShowDragon = ({ close, data }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.dragon);
  const [showContentInfo, setShowContentInfo] = useState(false);
  const [message, setMessage] = useState("");
  const [linkImg, setLinkImg] = useState("");

  const handleInfo = () => {
    setShowContentInfo(true);
  };
  const [userInfo, setUserInfo] = useState({
    username: "",
    numberBank: "",
    detailBank: "",
    secretKey: "",
  });

  const handleChange = (e) => {
    setMessage("");
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      userInfo.username === "" ||
      userInfo.numberBank === "" ||
      userInfo.secretKey === "" ||
      userInfo.detailBank === ""
    ) {
      setMessage("Bạn điền thiếu thông tin rồi!");
      return;
    }

    const newData = { ...data, ...userInfo };

    dispatch(editDragonThunk(newData));
  };

  useEffect(() => {
    switch (data?.name) {
      case "dragon_2024":
        setLinkImg(dragon_2024);
        return;
      case "dragon_cry":
        setLinkImg(dragon_cry);
        return;
      case "dragon_shy":
        setLinkImg(dragon_shy);
        return;
      case "dragon_fat":
        setLinkImg(dragon_fat);
        return;
      case "dragon_confident":
        setLinkImg(dragon_confident);
        return;
      case "dragon_sleep":
        setLinkImg(dragon_sleep);
        return;
    }
  }, [data]);

  return (
    <div className="show_dragon">
      <img src={overlay} className="overlay" />
      <div className="content">
        <img src={backgroundContent} className="bg_content" />
        {showContentInfo ? (
          <div className="content_info">
            <h1 className="title">Thông tin</h1>
            <p className="dragon_info">
              <img src={linkImg} />
              <h2>{data?.name}</h2>
              <h1>{data?.price}</h1>
            </p>
            <div className="content_layout">
              <div className="form">
                <input
                  placeholder="Tên của bạn..."
                  name="username"
                  value={userInfo.username}
                  onChange={handleChange}
                />
                <input
                  placeholder="Số tài khoản..."
                  name="numberBank"
                  value={userInfo.numberBank}
                  onChange={handleChange}
                />
                <textarea
                  placeholder="Thông tin thêm VD Quốc Tuấn Vietcombank.."
                  name="detailBank"
                  value={userInfo.detailBank}
                  onChange={handleChange}
                />
                <div>
                  <input
                    placeholder="key bí mật"
                    name="secretKey"
                    value={userInfo.secretKey}
                    onChange={handleChange}
                  />
                  <a href="https://web1s.io/NtPRNPUtEv" target="_blank">
                    Lấy key
                  </a>
                </div>
                <p>
                  *hint* Để có khoá bí mật bạn bấm vào nút bên phải trong nút
                  mình có link ads khoá bí mật là{" "}
                  <span>tên một kênh youtube </span>nhé
                </p>
                {message ||
                  (error ? <p className="message">{message || error}</p> : "")}
                <div>
                  <button onClick={handleSubmit}>Gửi</button>
                  {error === "success" && <button onClick={close}>Đóng</button>}
                </div>
              </div>

              <div className="dragon">
                <h2>{data?.name}</h2>
                <img src={linkImg} />
                <h1>{data?.price}</h1>
              </div>
            </div>
          </div>
        ) : (
          <>
          {data ? 
          <div className="content_dragon">
            <h1>Wow {data?.name}</h1>
            <p>{data?.wish}</p>
            <img className="dragon" src={linkImg} />
            <h1 className="price">{data?.price}</h1>
            <button onClick={handleInfo}>Nhận tiền thui</button>
          </div>
:<Loading/>}
          </>
        )}
      </div>
    </div>
  );
};

export default GiftHome;
