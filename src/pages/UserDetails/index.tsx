import queryString from "query-string";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";

export function UserDetails() {
  const [userame, setUsername] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const { userName } = useParams();

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    const username = parsed.username || "";
    const linkedin = parsed.linkedin || "";
    const github = parsed.github || "";
    setUsername(username as string);
    setLinkedin(linkedin as string);
    setGithub(github as string);
  }, []);

  const qrCodeValue = `${userName}?linkedin=${linkedin}&github=${github}`;

  return (
    <div className="bg-gradient-to-r from-slate-400 via-cyan-600 to-slate-600 min-h-screen px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Olá, {userName}!</h1>
        <p className="text-xl md:text-lg lg:text-xl">Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.</p>
        <div className="flex items-center mt-4 justify-center">
          <QRCode value={qrCodeValue} />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-evenly gap-2 sm:gap-0 sm:flex-row flex-col">
            <a href={`https://www.linkedin.com/in/${linkedin}`} className="block">
              <button type="submit" className="bg-blue-400 w-full py-2 px-4 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 mt-4 ">
                Linkedin
              </button>
            </a>
            <a href={`https://www.github.com/${github}`} className="block">
              <button type="submit" className="bg-blue-400 w-full py-2 px-4 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 mt-4">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
