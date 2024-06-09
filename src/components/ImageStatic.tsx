import { Skeleton } from "@mui/material"

const ImageStatic = () => {
    /* const IMAGE = {
        alt: 'Image-home',
        src: '/src/assets/landing/Scri.png'
      } */
    return (
        <>
            {/* {
  IMAGE ? (
    <img
      style={{
        width: 210,
        height: 118,
      }}
      alt={IMAGE.alt}
      src={IMAGE.src}
    />
  ) : (
    <Skeleton variant="rectangular" width={210} height={118} />
  )
} */}
            <Skeleton variant="rectangular" width={480} height={460} />
        </>
    )
}

export { ImageStatic }
