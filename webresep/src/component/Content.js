const Content = () => {
  return (
    <div>
      <div className="part_1">
        <div className="content-1">
          <div className="Foto-awal">
            <img
              src={process.env.PUBLIC_URL + "/images/Foto_1.jpg"}
              alt=""
              srcSet=""
              className="img-edit"
            />
            <div className="slogan-contain">
              <div className="sl-1">
                <div className="txt-title">
                  <h1>Bersama Mama, Masak Jadi Mudah</h1>
                </div>
                <div className="subtitle">
                  <h2>mama ada disini memandu kamu sampe bisa masak</h2>
                </div>
              </div>

              <div className="sl-2">
                <div className="Multi-plt">
                  <h2>tersedia di beberapa plaftform</h2>
                </div>

                <div className="platform">
                  <a href="" className="android">
                    <i
                      className="fa-brands fa-android"
                      style={{ fontSize: "1.4rem", color: "white" }}
                    ></i>
                    <h1>Android</h1>
                  </a>
                  <a href="" className="ios">
                    <i
                      className="fa-brands fa-apple"
                      style={{ fontSize: "1.4rem" }}
                    ></i>
                    <h1>Ios</h1>
                  </a>
                  <a href="" className="windows">
                    <i
                      className="fa-brands fa-windows"
                      style={{ fontSize: "1.4rem" }}
                    ></i>
                    <h1>Windows</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rspL">
            <div className="Resep-list">
              <div className="Resep-list-container">
                <h1>Resep Popular</h1>
              </div>
            </div>
          </div>

          <div className="containtresep">
            <div className="resepwrap">
              <div className="c-list-mkn">
                <div className="list-mkn">
                  <div className="mkn">
                    <div className="foto-mkn">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Tinu.jpeg"}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="desc-mkn">
                      <h1>Tinutuan</h1>
                      <img
                        src={process.env.PUBLIC_URL + "/images/bintang.png"}
                        className="bintang"
                        alt=""
                      />
                      <div className="bk-c">
                        <div className="bookmarks">
                          <i
                            className="bi bi-bookmark-check"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <h2>4.647</h2>
                        </div>
                      </div>
                      <a href="" className="chck-btn">
                        Check it out
                      </a>
                    </div>
                  </div>

                  <div className="mkn">
                    <div className="foto-mkn">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Tinu.jpeg"}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="desc-mkn">
                      <h1>Tinutuan</h1>
                      <img
                        src={process.env.PUBLIC_URL + "/images/bintang.png"}
                        className="bintang"
                        alt=""
                      />
                      <div className="bk-c">
                        <div className="bookmarks">
                          <i
                            className="bi bi-bookmark-check"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <h2>4.647</h2>
                        </div>
                      </div>
                      <a href="" className="chck-btn">
                        Check it out
                      </a>
                    </div>
                  </div>

                  <div className="mkn">
                    <div className="foto-mkn">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Tinu.jpeg"}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="desc-mkn">
                      <h1>Tinutuan</h1>
                      <div>
                        <img
                          src={process.env.PUBLIC_URL + "/images/bintang.png"}
                          className="bintang"
                          alt=""
                        />
                      </div>
                      <div className="bk-c">
                        <div className="bookmarks">
                          <i
                            className="bi bi-bookmark-check"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <h2>4.647</h2>
                        </div>
                      </div>
                      <a href="" className="chck-btn">
                        Check it out
                      </a>
                    </div>
                  </div>

                  <div className="mkn">
                    <div className="foto-mkn">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Tinu.jpeg"}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="desc-mkn">
                      <h1>Tinutuan</h1>
                      <img
                        src={process.env.PUBLIC_URL + "/images/bintang.png"}
                        className="bintang"
                        alt=""
                      />
                      <div className="bk-c">
                        <div className="bookmarks">
                          <i
                            className="bi bi-bookmark-check"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                          <h2>4.647</h2>
                        </div>
                      </div>
                      <a href="" className="chck-btn">
                        Check it out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
