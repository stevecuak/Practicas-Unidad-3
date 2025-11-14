import {
    Box,
    Checkbox,
    CheckboxGroup,
    CheckboxIndicator,
    CheckIcon,
    CheckboxIcon,
    CheckboxLabel,
    Link,
    LinkText,
    HStack,
    Icon,
    Divider,
    Pressable,
    Text,
    FormControl,
    FormControlLabel,
    FormControlError,
    FormControlErrorText,
    FormControlErrorIcon,
    FormControlLabelText,
    VStack,
    AlertCircleIcon,
    Button,
    ButtonText,
    Radio,
    RadioGroup,
    RadioIndicator,
    RadioIcon,
    RadioLabel,
    CircleIcon,
    Select,
    SelectTrigger,
    SelectInput,
    SelectIcon,
    SelectPortal,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicator,
    SelectDragIndicatorWrapper,
    SelectItem,
    ChevronDownIcon,
    Center,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Switch,
    Textarea,
    TextareaInput,
} from "@gluestack-ui/themed";

export const ContenedorPrincipal = () => {
    return (
        <Box className="p-6 bg-gray-50 rounded-lg">
            <VStack space="lg">
                <CheckboxGroup>
                    <VStack space="sm">
                        <Checkbox isDisabled={false} size="lg">
                            <CheckboxIndicator>
                                <CheckboxIcon as={CheckIcon} />
                            </CheckboxIndicator>
                            <CheckboxLabel>Checkbox habilitado</CheckboxLabel>
                        </Checkbox>

                        <Checkbox isDisabled size="lg">
                            <CheckboxIndicator>
                                <CheckboxIcon as={CheckIcon} />
                            </CheckboxIndicator>
                            <CheckboxLabel>Checkbox deshabilitado</CheckboxLabel>
                        </Checkbox>
                    </VStack>
                </CheckboxGroup>

                <Divider className="my-2 bg-gray-300" />

                <Link href="https://gluestack.io">
                    <HStack space="sm" alignItems="center">
                        <LinkText className="text-blue-600 font-medium">
                            Sitio Web de Gluestack
                        </LinkText>
                        <Icon as={CheckIcon} size="lg" className="text-blue-500" />
                    </HStack>
                </Link>

                <Divider className="my-2 bg-gray-300" />

                <Pressable
                    onPress={() => console.log("Gluestack.io!")}
                    className="p-4 rounded-md bg-blue-500"
                >
                    {({ pressed }) => (
                        <Text className={pressed ? "text-blue-100" : "text-white font-bold"}>
                            VXE
                        </Text>
                    )}
                </Pressable>

                <Divider className="my-2 bg-gray-300" />

                <FormControl size="md">
                    <FormControlLabel>
                        <FormControlLabelText className="text-gray-700 font-medium">
                            Radio 1
                        </FormControlLabelText>
                    </FormControlLabel>
                    
                    <RadioGroup>
                        <VStack space="sm">
                            <Radio value="Eng">
                                <RadioIndicator>
                                    <RadioIcon as={CircleIcon} />
                                </RadioIndicator>
                                <RadioLabel>English</RadioLabel>
                            </Radio>
                            <Radio value="Fre">
                                <RadioIndicator>
                                    <RadioIcon as={CircleIcon} />
                                </RadioIndicator>
                                <RadioLabel>French</RadioLabel>
                            </Radio>
                            <Radio value="Ger">
                                <RadioIndicator>
                                    <RadioIcon as={CircleIcon} />
                                </RadioIndicator>
                                <RadioLabel>German</RadioLabel>
                            </Radio>
                        </VStack>
                    </RadioGroup>

                    <Select className="mt-3">
                        <SelectTrigger variant="outline" size="md">
                            <SelectInput placeholder="Selecciona una opción" />
                            <SelectIcon className="mr-3" as={ChevronDownIcon} />
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                <SelectItem label="UX Research" value="ux" />
                                <SelectItem label="Web Development" value="web" />
                                <SelectItem
                                    label="Cross Platform Development"
                                    value="cross"
                                />
                                <SelectItem
                                    label="UI Designing"
                                    value="ui"
                                    isDisabled={true}
                                />
                                <SelectItem label="Backend Development" value="backend" />
                            </SelectContent>
                        </SelectPortal>
                    </Select>

                    <FormControlError>
                        <FormControlErrorIcon
                            as={AlertCircleIcon}
                            className="text-red-500"
                        />
                        <FormControlErrorText className="text-red-500">
                            Write Something...
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>

                <Button
                    className="self-end mt-4 border-blue-500"
                    size="sm"
                    variant="outline"
                    onPress={() => console.log("Submit")}
                >
                    <ButtonText className="text-blue-600">Enviar</ButtonText>
                </Button>

                <Divider className="my-2 bg-gray-300" />

                <Center className="w-[300px] h-[140px]">
                    <Slider
                        defaultValue={30}
                        size="md"
                        orientation="horizontal"
                        minValue={10}
                        maxValue={100}
                    >
                        <SliderTrack>
                            <SliderFilledTrack className="bg-blue-500" />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Center>

                <HStack space="sm" alignItems="center">
                    <Switch
                        defaultValue={true}
                        trackColor={{ false: "#e5e7eb", true: "#3b82f6" }}
                        thumbColor="#fafafa"
                    />
                    <Text size="sm" className="text-gray-700">
                        Switch!
                    </Text>
                </HStack>

                <Textarea size="md" className="w-64 mt-2">
                    <TextareaInput placeholder="Texto aquí." />
                </Textarea>
            </VStack>
        </Box>
    );
};

export default ContenedorPrincipal;
