import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
    AvatarBadge,
    Box, CheckIcon,
    CheckboxIcon,
    Link,
    LinkText,
    HStack,
    Icon,
    Divider,
    Text,
    VStack,
} from "@gluestack-ui/themed";

export const ContenedorProfile = () => {
    return (
        <Box className="p-6 bg-gray-50 rounded-lg">
            <VStack space="lg">
                <VStack>
                    <Avatar size="md">
                        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                        <AvatarImage
                            source={{
                                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                            }}
                        />
                        <AvatarBadge />
                    </Avatar>
                    <Text>Jane</Text>
                </VStack>
                <Link href="https://gluestack.io">
                    <HStack space="sm" alignItems="center">
                        <LinkText className="text-blue-600 font-medium">
                            Sitio Web de Gluestack
                        </LinkText>
                        <Icon as={CheckIcon} size="lg" className="text-blue-500" />
                    </HStack>
                </Link>

                <Divider className="my-2 bg-gray-300" />

                <HStack space="md" justifyContent="space-between">
                    <Box flex={1} className="bg-background-50 p-3 rounded-md text-center mx-1">
                        <Text>A</Text>
                    </Box>
                    <Box flex={1} className="bg-background-50 p-3 rounded-md text-center mx-1">
                        <Text>B</Text>
                    </Box>
                    <Box flex={1} className="bg-background-50 p-3 rounded-md text-center mx-1">
                        <Text>C</Text>
                    </Box>
                </HStack>


            </VStack>
        </Box>
    );
};

export default ContenedorProfile;
