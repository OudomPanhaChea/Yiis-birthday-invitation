import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import BirthdayCake from "../assets/Birthday_cake.json";
import Dog from '../assets/dog.jpg';
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

const Invitation = () => {
  const { width, height } = useWindowSize();
  const [recycle, setRecycle] = useState(true);

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecycle(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">
      <div
        className="fixed inset-0 bg-[url(/background.jpg)] bg-center bg-cover bg-no-repeat z-0 blur-[1px]"
        style={{ backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-100 to-pink-300 opacity-50"></div>
      </div>


      <div className="py-10 w-full flex flex-col items-center absolute top-0 left-0">
        <div className="absolute inset-0 overflow-hidden">
          <Confetti
            width={width}
            height={height}
            recycle={recycle}
            numberOfPieces={200}
          />
          <Confetti width={width} height={height} numberOfPieces={20} />
        </div>
        <div className="space-y-2 text-center w-[340px] px-4 py-8 border-2 rounded-lg border-white/40">
          <h1 className="text-3xl font-black">
            <span className="inline-block leading-[2] py-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              រីករាយថ្ងៃកំណើត
            </span>
          </h1>
          <h1 className="text-2xl font-medium">Happy 19th Birthday to Yiyi</h1>

          <div className="flex justify-center mt-8">
            <Lottie
              animationData={BirthdayCake}
              loop={true}
              autoPlay={true}
              className="w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="h-0.5 w-[20%] bg-white/30 rounded-full"></div>
            <FaRegHeart className="text-white/30" />
            <div className="h-0.5 w-[20%] bg-white/30 rounded-full"></div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">ខ្លឹមសារ</h3>
            <p className="text-sm font-medium leading-8 mt-4">
              សូមគោរពអញ្ជើញលោកឧកញ៉ា ឯកឧត្តម និង លោកជំទាវ
              មេត្តាចូលរួមអោយបានច្រើនកុះករ ដោយពាំនាំយកមកនូវកាដូផងដែរ
            </p>
            <p className="text-sm font-medium mt-2">ពីខ្ញុំបាទ ជា ឧត្តមបញ្ញា</p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-0.5 w-[10%] bg-black rounded-full"></div>
              <p className="text-sm font-medium">សូមអរគុណទុកជាមុន!</p>
              <div className="h-0.5 w-[10%] bg-black rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <img src={Dog} alt="dog" className="w-[80%] rounded-md" />
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            <div className="h-0.5 w-[20%] bg-white/30 rounded-full"></div>
            <FaRegHeart className="text-white/30" />
            <div className="h-0.5 w-[20%] bg-white/30 rounded-full"></div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold">គោលដៅ</h3>

            <div className="flex items-center gap-3 mt-5">
              <GoGoal size={24} />
              <h3 className="text-sm">ញ៉ាំស៊ុបសាមគ្គី</h3>
            </div>

            <div className="flex items-start gap-3">
              <FaRegClock size={24} />
              <div className="text-start">
                <h3 className="text-sm mt-1">២១ សីហា, ២០២៥</h3>
                <h3 className="text-sm mt-2">វេលាម៉ោង៣រសៀល (ទៅដល់ទីតាំង)</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone size={24} />
              <a href="tel:+85585825596" className="text-lg">085-825-596</a>
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin size={24} />
              <h3 className="text-lg">Ancle Hai Hot Pot , IFL</h3>
            </div>

            <div className="flex justify-center items-center gap-2 mt-6">
              <div className="h-0.5 w-[20%] bg-white/30 rounded-full"></div>
              <FaRegHeart className="text-white/30" />
              <div className="h-0.5 w-[20%] bg-white/30 rounded-full"></div>
            </div>

            <div className="mt-6">
              <h1 className="text-sm">
                ទីតាំងលើ <span className="text-lg">Google map</span>
              </h1>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7867856760195!2d104.89307167481732!3d11.567137088633809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951005efc9643%3A0x8127fab0ac32802c!2sAncle%20Hai%20Hotpot!5e0!3m2!1sen!2skh!4v1755715346610!5m2!1sen!2skh"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
