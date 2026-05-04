import { Link } from 'react-router-dom'
import { paths } from '../../config/paths'
import { assets } from '../../siteAssets'

const pieceClasses = [
  'absolute left-[40.24px] top-[11.65px] h-[17.03px] w-[18.393px]',
  'absolute left-[59.67px] top-[15.76px] h-[13.137px] w-[11.557px]',
  'absolute left-[72.79px] top-[11.09px] h-[17.759px] w-[13.332px]',
  'absolute left-[87.17px] top-[15.71px] h-[12.968px] w-[8.102px]',
  'absolute left-[95.02px] top-[15.75px] h-[13.162px] w-[13.526px]',
  'absolute left-[109.04px] top-[15.75px] h-[13.162px] w-[13.526px]',
  'absolute left-[123.63px] top-[11.09px] h-[17.589px] w-[12.942px]',
  'absolute left-[9.44px] top-[10.9px] h-[9.101px] w-[15.766px]',
  'absolute left-[11.93px] top-[20.08px] h-[6.522px] w-[10.869px]',
  'absolute left-[9.44px] top-[15.45px] h-[10.543px] w-[15.766px]',
  'absolute left-[13px] top-[21.99px] h-[7.118px] w-[4.317px]',
  'absolute left-[17.32px] top-[21.94px] h-[7.164px] w-[4.413px]',
] as const

const pieceSrc = [
  assets.logoPieces.vector0,
  assets.logoPieces.vector1,
  assets.logoPieces.vector2,
  assets.logoPieces.vector3,
  assets.logoPieces.vector4,
  assets.logoPieces.vector5,
  assets.logoPieces.vector6,
  assets.logoPieces.vector7,
  assets.logoPieces.vector8,
  assets.logoPieces.vector9,
  assets.logoPieces.vector10,
  assets.logoPieces.vector11,
] as const

type MabrookLogoProps = {
  compact?: boolean
}

export function MabrookLogo({ compact = false }: MabrookLogoProps) {
  const scale = compact ? 'scale-[0.92]' : 'scale-100'
  return (
    <Link
      to={paths.home}
      className={`relative block h-[40px] w-[137px] origin-left ${scale}`}
      aria-label="Mabrook home"
    >
      <img
        src={assets.logoPieces.mark}
        alt=""
        className="absolute left-0 top-0 h-[40.001px] w-[34.641px]"
      />
      {pieceSrc.map((src, index) => (
        <img key={src} src={src} alt="" className={pieceClasses[index]} />
      ))}
    </Link>
  )
}
