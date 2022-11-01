import './style.css';
import Wall from './wall.png';

function ComingSoon() {
  return (
    <div className="flex flex-col items-center mx-auto md:w-4/5">
      <img
        src={Wall}
        alt="Vincent Van Gogh with Kun Faya Kun"
        className="w-full mt-0  md:w-3/4 md:mt-20 transition-all"
      />
      <div className="-mt-20 mb-20 lg:-mt-48 flex flex-col gap-12 w-3/4 md:w-3/6 p-4">
        <div className="text-2xl leading-tight font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-200 to-violet-800">
          build
          <br />
          break
          <br />
          build bigger.
          <br />
        </div>

        <div className="mb-4 leading-tight font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-bl from-slate-200 to-slate-900 text-5xl sm:text-6xl ">
          Coming Soon.
        </div>

        <div className="flex gap-x-6 -mt-4 leading-tight font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-cyan-200 to-violet-800 text-lg sm:text-xl ">
          Debarshi Das
          <a
            href="https://github.com/DarkStark9000"
            className="overline decoration-pink-500 hover:underline text-sm sm:text-base"
          >
            GTHB
          </a>
          <a
            href="https://www.linkedin.com/in/thedebarshidas/"
            className="overline decoration-pink-500 hover:underline text-sm sm:text-base"
          >
            LNKDN
          </a>
        </div>

        <div className="flex flex-col gap-x-1 -mt-4 leading-tight font-thin tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-500 to-gray-300 text-sm sm:text-xs ">
          <p>
            inspired from{' '}
            <a href="https://dua.wtf/" className="underline decoration-slate-600">
              dua.wtf
            </a>{' '}
            by{' '}
            <a href="https://twitter.com/pragdua" className="underline decoration-slate-600">
              @pragdua
            </a>
          </p>
          <p>
            artwork by{' '}
            <a href="https://www.instagram.com/kaushikfx/" className="underline decoration-slate-600">
              kaushik bhattad
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
