import { chakra } from "@chakra-ui/react";

type SwooshDividerProps = {
  fill?: string;
  flipX?: boolean;
  flipY?: boolean;
};

export const SwooshDivider = ({ fill = "#F90F90", flipX = false, flipY = false }: SwooshDividerProps) => {
  const scaleX = flipX ? -1 : 1;
  const scaleY = flipY ? -1 : 1;

  return (
    <chakra.svg
      viewBox="0 0 1920 417"
      width="100%"
      height="auto"
      preserveAspectRatio="none"
      display="block"
      transform={`scale(${scaleX}, ${scaleY})`}
    >
      <path
        d="M0,0h1920v417.5C1158.1,190.4,743,0,524.3,0S55.2,275.8,0,347.3V0Z"
        fill={fill}
      />
    </chakra.svg>
  );
};