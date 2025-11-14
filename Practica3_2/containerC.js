import {
    Box,
    Checkbox,
    CheckboxGroup,
    CheckboxIndicator,
    CheckIcon,
    CheckboxIcon,
    CheckboxLabel,
    Link, Textarea, TextareaInput,
    LinkText,
    HStack,
    Icon, Divider,
    Pressable, Text,
    FormControl,
    FormControlLabel,
    FormControlError,
    FormControlErrorText,
    FormControlErrorIcon,
    FormControlHelper,
    FormControlHelperText,
    FormControlLabelText,
    VStack,
    AlertCircleIcon,
    Button, ButtonText, ButtonSpinner,
    Radio,
    RadioGroup,
    RadioIndicator,
    RadioIcon,
    RadioLabel, CircleIcon, Select,
    SelectTrigger,
    SelectInput,
    SelectIcon,
    SelectPortal, Center,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicator,
    SelectDragIndicatorWrapper,
    SelectItem, ChevronDownIcon,
    Slider, Switch,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@gluestack-ui/themed";

export const ContenedorPrincipal = (props) => {
    return (
        <Box>
            <CheckboxGroup>
                <Checkbox isDisabled={false} size="lg">
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel> Checkbox habilitado</CheckboxLabel>
                </Checkbox>
                <Checkbox isDisabled={true} size="lg">
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel> Checkbox deshabilitado</CheckboxLabel>
                </Checkbox>
            </CheckboxGroup>
            <Divider className="my-1.0" />
            <Link href="https://gluestack.io">
                <HStack>
                    <LinkText>Sitio Web de Gluestack</LinkText>
                    <Icon as={CheckIcon} size="lg" className="mt-0.5 text-info-600" />
                </HStack>
            </Link>
            <Divider className="my-1.5" />
            <Pressable onPress={() => console.log('Gluestack mugriento')} className="p-50 bg-primary-500">
                {({ pressed }) => (
                    <Text className={pressed ? "error-50" : "success-50"}>VXE</Text>
                )}
            </Pressable>
            <VStack>
                <FormControl
                    isInvalid={false}
                    size="md"
                    isDisabled={false}
                    isReadOnly={false}
                    isRequired={false}
                >
                    <FormControlLabel>
                        <FormControlLabelText>Radio 1</FormControlLabelText>
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
                    <Divider className="my-0.5" />
                    <Select>
                        <SelectTrigger variant="outline" size="md">
                            <SelectInput placeholder="Select option" />
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
                                    label="Cross Platform Development Process"
                                    value="Cross Platform Development Process"
                                />
                                <SelectItem label="UI Designing" value="ui" isDisabled={true} />
                                <SelectItem label="Backend Development" value="backend" />
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} className="text-red-500" />
                        <FormControlErrorText className="text-red-500">
                            At least 6 characters are required.
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <Divider className="my-0.5" />
                <Button
                    className="w-fit self-end mt-4"
                    size="sm"
                    variant="outline"
                    onPress={() => console.log('Gluestack mugriento')}
                >
                    <ButtonText>Submit</ButtonText>
                </Button>

                <Divider className="my-0.5" />

            </VStack>
            <Center className="w-[300px] h-[140px]">
                <Slider
                    defaultValue={30}
                    size="md"
                    orientation="horizontal"
                    isDisabled={false}
                    isReversed={false}
                    minValue={10}
                    maxValue={100}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Center>
            <HStack space="md">
                <Switch
                    defaultValue={true}
                    trackColor={{ false: '#d4d4d4', true: '#525252' }}
                    thumbColor="#fafafa"
                    activeThumbColor="#fafafa"
                    ios_backgroundColor="#d4d4d4"
                />
                <Text size="sm">Public profile</Text>
            </HStack>
            <Textarea
                size="md"
                isReadOnly={false}
                isInvalid={false}
                isDisabled={false}
                className="w-64"
            >
                <TextareaInput placeholder="Your text goes here..." />
            </Textarea>
        </Box>
    );
}

export default ContenedorPrincipal;