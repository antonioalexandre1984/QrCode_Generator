import { InputForm } from '../../components/InputForm';
import { QrCode } from '../../components/QrCode';

export function HomePage() {
  return (
    <div className='bg-gradient-to-r from-slate-400 via-cyan-600 to-slate-600 h-screen pt-36 px-2'>
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputForm />
          <QrCode />
        </div>
      </div>
    </div>
  );
}
