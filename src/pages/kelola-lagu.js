import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Gambar from "../assets/binotify.png";

function KelolaLagu() {
  const navigate = useNavigate();

  const maxData = 5;
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [showData, setShowData] = useState([]);
  const [tempValue, setTempValue] = useState([null, null, null]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(true);

  const fetchSongs = () => {
    axios
      .get(`http://localhost:3002/api/songs/penyanyi/${Cookies.get("id")}`, {
        withCredentials: true,
      })
      .then((response) => {
        setData(response.data);
        setShowData(
          response.data.slice(index * maxData, index * maxData + maxData)
        );
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchSongs();
  }, [setData, index]);

  function openModal(song_id, judul) {
    setTempValue([song_id, judul, ""]);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const changeIndex = (isNext) => {
    if (!isNext && index > 0) {
      setIndex(index - 1).then(() =>
        setShowData(data.slice(index * maxData, index * maxData + maxData))
      );
    } else if (
      isNext &&
      data.length % maxData == 0 &&
      data.length / maxData != index + 1
    ) {
      setIndex(index + 1).then(() =>
        setShowData(data.slice(index * maxData, index * maxData + maxData))
      );
    } else if (isNext && Math.ceil(data.length / maxData) - 1 >= index + 1) {
      setIndex(index + 1).then(() =>
        setShowData(data.slice(index * maxData, index * maxData + maxData))
      );
    }
  };

  // useEffect(() => {
  //     setShowData(data.slice(index * maxData, index * maxData + maxData))
  // }, [index, setShowData])

  const onSubmitEdit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (tempValue[1] === "") {
      alert("Judul lagu tidak boleh kosong");
      return;
    }
    console.log(tempValue);
    formData.append("judul", tempValue[1]);
    formData.append("audio_path", tempValue[2]);
    axios
      .put(`http://localhost:3002/api/song/update/${tempValue[0]}`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        alert(response.data.message);
        fetchSongs();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const onSubmitAdd = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", tempValue[1]);
    formData.append("audio_path", tempValue[2]);
    formData.append("penyanyi_id", Cookies.get("id"));
    axios
      .post(`http://localhost:3002/api/song/create`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        alert(response.data.message);
        fetchSongs();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const onSubmitDelete = (data) => {
    axios(`http://localhost:3002/api/song/delete/${data.target.value}`, {
      method: "POST",
      withCredentials: true,
    })
      .then((response) => {
        alert(response.data.message);
        fetchSongs();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const onLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("isAdmin");
    Cookies.remove("id");
    Cookies.remove("username");
    return navigate("/");
  };

  return (
    <div className="h-screen w-full overflow-x-auto bg-black-200 relative">
      <div className="flex flex-row justify-between mt-4 mx-12">
        <a
          href="/subscribe"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          <img className="w-max h-16 mr-2" src={Gambar} alt="logo" />
        </a>
        <h1 className="text-white text-2xl mt-4 text-center font-bold">
          Halo! {Cookies.get("username")}
        </h1>
        <button
          type="button"
          className="focus:outline-none h-12 my-2 border-2 border-red text-white bg-red hover:bg-black-200 hover:text-red focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={onLogout}
        >
          Log out
        </button>
      </div>
      <h1 className="text-white text-3xl text-center mt-8 font-bold">
        Kelola Lagu
      </h1>
      <button
        onClick={() => {
          openModal("", "");
          setIsEdit(false);
        }}
        type="button"
        className="ml-36 mt-8 focus:outline-none my-2 border-2 border-green-100 text-white bg-green-100 hover:text-green-100 hover:bg-black-200 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2"
      >
        Add Song
      </button>
      <table className="w-10/12 mx-auto mt-2 bg-black-200 text-sm text-left text-white">
        <thead className="text-xs text-gray-300 uppercase bg-gray-50 border-b">
          <tr>
            <th scope="col" className="py-3 px-6">
              #
            </th>
            <th scope="col" className="py-3 px-6">
              Judul
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {showData &&
            showData.map((row, i) => {
              return (
                <tr className="cursor-default bg-black-200" key={i}>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-300 whitespace-nowrap"
                  >
                    {i+1}
                  </th>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-white whitespace-nowrap"
                  >
                    {row.judul}
                  </th>
                  <td>
                    <button
                      onClick={() => {
                        openModal(row.song_id, row.judul);
                        setIsEdit(true);
                      }}
                      data-modal-toggle="authentication-modal"
                      type="button"
                      className="focus:outline-none my-2 border-2 border-green-100 text-white bg-green-100 hover:text-green-100 hover:bg-black-200 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={onSubmitDelete}
                      value={row.song_id}
                      type="button"
                      className="focus:outline-none my-2 border-2 border-red text-white bg-red hover:bg-black-200 hover:text-red focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex flex-row ml-32 mt-4">
        <a
          onClick={() => changeIndex(false)}
          className="block px-3 py-2 ml-0 leading-tight text-gray-300 bg-transparent border border-gray-300 rounded-l-lg hover:bg-white hover:text-black-200 hover:border-white"
        >
          <span className="sr-only">Previous</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a className="px-3 py-2 leading-tight text-gray-300 bg-transparent border border-transparent">
          {index+1}
        </a>
        <a
          onClick={() => changeIndex(true)}
          className="block px-3 py-2 leading-tight text-gray-300 bg-transparent border border-gray-300 rounded-r-lg hover:bg-white hover:text-black-200 hover:border-white"
        >
          <span className="sr-only">Next</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      {modalIsOpen ? (
        <>
          <div
            id="authentication-modal"
            tabindex="-1"
            className="overflow-y-auto overflow-x-hidden  fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full"
            style={{
              backgroundColor: "rgb(0,0,0,0.5",
            }}
          >
            <div
              className="relative w-full max-w-md h-full md:h-auto"
              style={{
                margin: "0 auto",
                marginTop: "20vmin",
              }}
            >
              <div className="relative bg-black-200 rounded-lg border-2 border-green-100 shadow dark:bg-gray-700">
                <button
                  onClick={closeModal}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="py-6 px-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    {isEdit ? "EDIT SONG" : "ADD SONG"}
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        for="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Title
                      </label>
                      <input
                        onChange={(e) =>
                          setTempValue([
                            tempValue[0],
                            e.target.value,
                            tempValue[2],
                          ])
                        }
                        value={tempValue[1]}
                        type="title"
                        name="title"
                        id="title"
                        className="bg-black-200 border border-green-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="add title"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="file"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Audio File
                      </label>
                      <input
                        onChange={(e) =>
                          setTempValue([
                            tempValue[0],
                            tempValue[1],
                            e.target.files[0],
                          ])
                        }
                        type="file"
                        name="audio_path"
                        id="audio_path"
                        className="bg-black-200 border border-green-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required={!isEdit}
                      />
                    </div>
                    <button
                      onClick={
                        isEdit ? (e) => onSubmitEdit(e) : (e) => onSubmitAdd(e)
                      }
                      type="submit"
                      className="w-full border-2 border-green-100 text-white bg-green-100 hover:bg-black-200 hover:border-2 hover:border-green-100 hover:text-green-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default KelolaLagu;
