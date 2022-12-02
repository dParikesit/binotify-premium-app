import { useState, useEffect } from 'react';
import Gambar from "../assets/binotify.png"
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Subscribe() {
    const navigate = useNavigate();
    const maxData = 5;
    const [index, setIndex] = useState(0);
    const [showData, setShowData] = useState([]);
    const [data, setData] = useState([])

    const changeIndex = (isNext) => {
        if(!isNext && index > 0) {
            setIndex(index - 1);
        } else if (isNext && data.length % maxData == 0 && data.length / maxData != index + 1) {
            setIndex(index + 1);
        } else if (isNext && Math.ceil(data.length / maxData) - 1 >= index + 1) {
            setIndex(index + 1);
        }
    }

    useEffect(() => {
      axios
        .get("http://localhost:3002/api/subs/pending", {
          withCredentials: true,
        })
        .then((response) => {
          setData(response.data);
          setShowData(
            response.data.slice(index * maxData, index * maxData + maxData)
          );
        })
        .catch((error) => {
          alert(error.message);
        });
    }, []);

    useEffect(() => {
        setShowData(data.slice(index * maxData, index * maxData + maxData))
    }, [index])

    const onAccept = (e, reqData) => {
        e.preventDefault();
        axios
          .put(
            "http://localhost:3002/api/subs/accept",
            {
              creator_id: reqData.creator_id,
              subscriber_id: reqData.subscriber_id,
            },
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            alert(response.data);
            setData(data.filter((item) => item !== reqData));
            window.location.reload();
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
    };

    const onReject = (e, reqData) => {
      e.preventDefault();
      axios
        .put(
          "http://localhost:3002/api/subs/reject",
          {
            creator_id: reqData.creator_id,
            subscriber_id: reqData.subscriber_id,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          alert(response.data);
          setData(data.filter((item) => item !== reqData));
          window.location.reload();
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
    
    return(
        <div className="h-screen w-full overflow-x-auto bg-black-200 relative">
            <div className='flex flex-row justify-between mt-4 mx-12'>
                <a href="/subscribe" className="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img className="w-max h-16 mr-2" src={Gambar} alt="logo" />
                </a>
                <button onClick={onLogout} type="button" className="focus:outline-none h-12 my-2 border-2 border-red text-white bg-red hover:bg-black-200 hover:text-red focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Log out</button>
            </div>
            <h1 className="text-white text-3xl text-center mt-8 font-bold">Daftar Request User</h1>
            <table className="w-10/12 mx-auto mt-4 bg-black-200 text-sm text-left text-white">
                <thead className="text-xs text-gray-300 uppercase bg-gray-50 border-b">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            #
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Creator Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Subscriber Id
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {showData && showData.map((d, i) => {return(
                        <tr className="cursor-default bg-black-200" key={i}>
                            <th scope="row" className="py-4 px-6 font-medium text-gray-300 whitespace-nowrap">
                                {i + index * maxData + 1}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap">
                                {d["creator_name"]}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap">
                                {d["subscriber_id"]}
                            </th>
                            <td>
                                <button onClick={(e) => onAccept(e,d)} type="button" className="focus:outline-none my-2 border-2 border-green-100 text-white bg-green-100 hover:text-green-100 hover:bg-black-200 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2">Accept</button>
                            </td>
                            <td>
                                <button onClick={(e) => onReject(e,d)} type="button" className="focus:outline-none my-2 border-2 border-red text-white bg-red hover:bg-black-200 hover:text-red focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2">Reject</button>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <div className="flex flex-row ml-32 mt-4">
                <a onClick={() => changeIndex(false)} className="block px-3 py-2 ml-0 leading-tight text-gray-300 bg-transparent border border-gray-300 rounded-l-lg hover:bg-white hover:text-black-200 hover:border-white">
                    <span className="sr-only">Previous</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                <a className="px-3 py-2 leading-tight text-gray-300 bg-transparent border border-transparent">{index}</a>
                <a onClick={() => changeIndex(true)} className="block px-3 py-2 leading-tight text-gray-300 bg-transparent border border-gray-300 rounded-r-lg hover:bg-white hover:text-black-200 hover:border-white">
                    <span className="sr-only">Next</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default Subscribe;