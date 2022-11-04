import './style.css';
import Wall from './wall.png';

function ComingSoon() {
  return (
    <div className="mx-auto flex flex-col items-center md:w-4/5">
      <img
        src={Wall}
        alt="Vincent Van Gogh with Kun Faya Kun"
        className="mt-0 w-full transition-all md:mt-20 md:w-3/4"
      />
      <div className="-mt-20 mb-20 flex w-3/4 flex-col gap-12  p-4 md:w-3/6 lg:-mt-48">
        <div className=" bg-gradient-to-br from-slate-200 to-violet-800 bg-clip-text text-2xl font-semibold leading-tight tracking-tight text-transparent">
          build
          <br />
          break
          <br />
          build bigger.
          <br />
        </div>

        <div className="mt-2 mb-4 bg-gradient-to-bl from-slate-200 to-slate-900 bg-clip-text py-2 text-5xl font-extrabold leading-10 tracking-tight text-transparent sm:text-6xl ">
          Coming Soon.
        </div>

        <div className="-mt-4 flex gap-x-6 bg-gradient-to-br from-cyan-200 to-violet-800 bg-clip-text text-lg font-bold leading-tight tracking-tight text-transparent sm:text-xl ">
          Debarshi Das
          <a
            href="https://github.com/DarkStark9000"
            className="text-sm overline decoration-pink-500 hover:underline sm:text-base"
          >
            GTHB
          </a>
          <a
            href="https://peerlist.io/thedebarshidas"
            className="text-sm overline decoration-pink-500 hover:underline sm:text-base"
          >
            PRLST
          </a>
        </div>

        <div className="-mt-4 flex flex-col gap-x-1 bg-gradient-to-br from-slate-500 to-gray-300 bg-clip-text text-sm font-thin leading-tight tracking-tight text-transparent sm:text-xs ">
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
