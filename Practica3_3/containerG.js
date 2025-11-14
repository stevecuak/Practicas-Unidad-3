import React, { useRef, useEffect } from 'react';
import {
    Box,
    VStack,
    HStack,
    Text,
    Button,
    Image,
    Badge,
    Card,
    Divider,
    useToast,
    Toast,
    Icon,
} from '@gluestack-ui/themed';
import { ScrollView, Animated } from 'react-native';
import { ShoppingCart, Info, CheckCircle } from 'lucide-react-native';

const DisplayS = () => {
    const toast = useToast();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Animación de aparición del toast
    const fadeIn = () => {
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => fadeOut(), 1800); // Desaparece después de 1.8s
        });
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleAddToCart = () => {
        fadeIn();
        toast.show({
            placement: 'bottom',
            render: () => (
                <Animated.View style={{ opacity: fadeAnim }}>
                    <Toast action="success" variant="solid">
                        <HStack alignItems="center" space="sm">
                            <Icon as={CheckCircle} size="sm" color="$green500" />
                            <Text color="black" bold>
                                Agregado al carrito!
                            </Text>
                            <Icon as={CheckCircle} size="sm" color="$green500" />
                        </HStack>
                    </Toast>
                </Animated.View>
            ),
        });
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
            <VStack space="md" p="$4">
                {/* Tarjeta principal */}
                <Card size="md" variant="elevated" borderRadius="$lg">
                    <Image
                        source={{ uri: 'https://m.media-amazon.com/images/I/81RR7rmJCoL.jpg' }}
                        alt="Dell Presicion"
                        height={220}
                        width={350}
                        borderTopLeftRadius="$lg"
                        borderTopRightRadius="$lg"
                    />

                    <VStack p="$4" space="sm">
                        <Badge alignSelf="flex-start" action="info" variant="solid" bgColor='lightgray'>
                            <HStack alignItems="center" space="xs">
                                <Icon as={Info} size="xs" color="red" />
                                <Badge.Text color='black'>Sold Out</Badge.Text>
                            </HStack>
                        </Badge>

                        <Text bold fontSize="$lg">
                            Dell Presicion
                        </Text>
                        <Text color="$muted.600">
                            Floral embroidered notch neck thread work cotton kurta in white and black.
                        </Text>

                        <Button
                            onPress={handleAddToCart}
                            action="primary"
                            mt="$3"
                            borderRadius="$sm"
                        >
                            <HStack alignItems="center" space="sm">
                                <Icon as={ShoppingCart} size="sm" color="white" />
                                <Text color="white">Add to cart</Text>
                            </HStack>
                        </Button>

                        <Button variant="outline" mt="$2" borderRadius="$sm">
                            <Text>Wishlist</Text>
                        </Button>
                    </VStack>
                </Card>

                {/* Tabla de inventario */}
                <Card size="sm" variant="outline" borderRadius="$lg" mt="$3">
                    <VStack space="xs" p="$3">
                        <HStack justifyContent="space-between" pb="$1">
                            <Text bold>Pro</Text>
                            <Text bold>Size</Text>
                            <Text bold>Ava</Text>
                        </HStack>
                        <Divider />
                        <HStack justifyContent="space-between" py="$1">
                            <Text>Dress</Text>
                            <Text>Medium</Text>
                            <Text>12</Text>
                        </HStack>
                        <HStack justifyContent="space-between" py="$1">
                            <Text>Earring</Text>
                            <Text>Large</Text>
                            <Text>90</Text>
                        </HStack>
                    </VStack>
                    <Divider />
                    <Text textAlign="center" py="$2" color="$muted.500">
                        Showing recent inventory
                    </Text>
                </Card>
            </VStack>
        </ScrollView>
    );
};

export default DisplayS;
