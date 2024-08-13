import {
  Heading,
  Icon,
  HStack,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: "https://static.tuasaude.com/media/article/pb/gk/treino-costas_39685_l.jpg",
          }}
          alt="Exercise image"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading color="$white" fontSize="$lg" fontFamily="$heading">
            Puxada Frontal
          </Heading>
          <Text color="$gray200" fontSize="$sm" mt="$1" numberOfLines={2}>
            3 séries x 12 rep lorem
          </Text>
        </VStack>
        <Icon as={ChevronRight} color="$gray100" />
      </HStack>
    </TouchableOpacity>
  );
}
