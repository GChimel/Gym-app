import { ComponentProps } from 'react';
import { Button as GlueStackButton, Text, ButtonSpinner } from '@gluestack-ui/themed';

type Props = ComponentProps<typeof GlueStackButton> & {
  title: string;
  isLoading?: boolean;
  variant?: 'solid' | 'outline';
};

export function Button({ title, isLoading = false, variant = 'solid', ...rest }: Props) {
  return (
    <GlueStackButton
      w="$full"
      h="$14"
      bg={variant === 'outline' ? 'transparent' : '$green700'}
      borderWidth={variant === 'outline' ? '$1' : '$0'}
      borderColor="$green500"
      rounded="$sm"
      $active-bg={variant === 'outline' ? '$gray500' : '$green500'}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text color={variant === 'outline' ? '$green500' : '$white'} fontFamily="$heading" fontSize="$sm">
          {title}
        </Text>
      )}
    </GlueStackButton>
  );
}
