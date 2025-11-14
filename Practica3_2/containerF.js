import React from "react";
import {
    Box,
    VStack,
    HStack,
    Avatar,
    AvatarImage,
    AvatarFallbackText,
    AvatarBadge,
    Text,
    Divider,
    Image,
    Icon,
} from "@gluestack-ui/themed";
import { Heart, Users, Eye } from "lucide-react-native";
import static_avatar from "./assets/static_avatar.png";
import anime_picture from "./assets/ANIME-PICTURE.png";
import car_picture from "./assets/1665034185730.jpg";
import dashb_picture from "./assets/IMG_20190703_045825.jpg";
import cyan_picture from "./assets/imagencyan.jpg";

const ContenedorProfile = () => {
    return (
        <Box className="flex-1 bg-white p-5">
            <VStack space="md" alignItems="center">
                <Avatar size="2xl" className="bg-red-500">
                    <AvatarImage
                        source={static_avatar} style={{ width: 120, height: 120 }} alt="HT"
                    />
                    <AvatarBadge />
                    <AvatarFallbackText></AvatarFallbackText>
                </Avatar>

                <VStack alignItems="center" space="xs">
                    <Text className="text-lg font-semibold">Jane Doe</Text>
                    <Text className="text-gray-500">FullStack Developer</Text>
                    <Text className="text-gray-400">Denver, Colorado</Text>
                </VStack>

                <HStack space="xl" alignItems="center" justifyContent="center">
                    <VStack alignItems="center">
                        <Text className="text-lg font-semibold">44</Text>
                        <Text className="text-gray-400 text-xs">Following</Text>
                    </VStack>
                    <Divider orientation="vertical" className="h-6 bg-gray-200" />
                    <VStack alignItems="center">
                        <Text className="text-lg font-semibold">319,120</Text>
                        <Text className="text-gray-400 text-xs">Followers</Text>
                    </VStack>
                    <Divider orientation="vertical" className="h-6 bg-gray-200" />
                    <VStack alignItems="center">
                        <Text className="text-lg font-semibold">1.12 M</Text>
                        <Text className="text-gray-400 text-xs">Likes</Text>
                    </VStack>
                </HStack>

                <HStack space="lg" justifyContent="center" mt="$4">
                    <Box className="bg-white rounded-full p-3 shadow-md">
                        <Icon as={Users} size="lg" color="black" />
                    </Box>
                    <Box className="bg-white rounded-full p-3 shadow-md">
                        <Icon as={Heart} size="lg" color="black" />
                    </Box>
                    <Box className="bg-white rounded-full p-3 shadow-md">
                        <Icon as={Eye} size="lg" color="black" />
                    </Box>
                </HStack>
            </VStack>

            <VStack mt="$6" space="sm">
                <Text className="text-base font-semibold mb-2">Gallery</Text>

                <Box className="rounded-lg overflow-hidden mb-3">
                    <Image
                        alt="Main Gallery"
                        source={{
                            uri: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
                        }}
                        resizeMode="cover"
                        style={{ width: "99%", height: 100, borderWidth: 2, borderColor:'#ff00bfff' , borderRadius: 10, alignSelf: "center" }}
                    />
                </Box>

                <HStack space="md" justifyContent="space-between" flexWrap="wrap">
                    <Image
                        alt="img1"
                        source={car_picture}
                        style={{ width: "30%", height: 80, borderRadius: 10, borderWidth: 1 }}
                    />
                    <Image
                        alt="img2"
                        source={anime_picture}
                        style={{ width: "30%", height: 80, borderRadius: 10, borderWidth: 1 }}
                    />
                    <Image
                        alt="img3"
                        source={dashb_picture}
                        style={{ width: "30%", height: 80, borderRadius: 10, borderWidth: 1 }}
                    />

                </HStack>
                <Box className="rounded-lg overflow-hidden mb-3">
                    <Image
                        alt="Main Gallery"
                        source={cyan_picture}
                        resizeMode="cover"
                        style={{ width: "98%", height: 145, borderWidth: 2, borderColor:'#ff00bfff', borderRadius: 10, alignSelf: "center" }}
                    />
                </Box>
            </VStack>
        </Box>
    );
};

export default ContenedorProfile;