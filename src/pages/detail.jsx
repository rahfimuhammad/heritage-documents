import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../fragments/LayoutFragment'
import Pdf from '../components/Pdf'
import { Link, useParams } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import { IsMediumScreen } from '../libs/detectScreen'
import DownloadOutlined from '@ant-design/icons/DownloadOutlined'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Detail = () => {

    const { id } = useParams()
    const [detail, setDetail] = useState()
    const isMedium = IsMediumScreen()
    const apiUrl = process.env.REACT_APP_API_URL

    const getDetail = async () => {
        try {
            const response = await axios.get(
                `${apiUrl}/document/${id}`
            )  
            setDetail(response?.data) 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const details = [
        {
            title: 'JENIS DOKUMEN',
            content: detail?.type
        },
        {
            title: 'NOMOR',
            content: detail?.number
        },
        {
            title: 'TAHUN',
            content: detail?.year
        },
        {
            title: 'STATUS',
            content: detail?.status
        }
    ]

    const statusInfo = () => {
        if (detail?.linked?.length > 0) {
            return {
                label: `Menggantikan ${detail?.linked?.[0]?.attachment?.title}`,
                link: detail?.linked?.[0]?.attachment?.id
            }
        } else if (detail?.attachment?.length > 0) {
            return {
                label: `Digantikan ${detail?.attachment?.[0]?.document?.title}`,
                link: detail?.attachment?.[0]?.document?.id
            }
        } else {
            return {
                label:'-',
                link: '-'
            }
        }
    }

    let { label } = statusInfo()

    return (
        <Layout>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap='20px'
            >
                <Box
                    p='10px'
                    w='calc(100% - 10px)'
                    display='flex'
                    justifyContent='center'
                    flexDirection={isMedium? 'column' : 'row'}
                    gap='10px'
                >
                    <Box
                        display='flex'
                        flexDirection='column'
                        gap='10px'
                    >
                        <Box
                            w={isMedium? '100%' : '450px'}
                            border='1px solid #ccc'
                            padding={isMedium? '10px' : '10px 20px'}
                            borderRadius='5px'
                            display='flex'
                            flexDirection='column'
                            gap='15px'
                            h='fit-content'
                        >
                            <Box
                                w='100%'
                            >
                                <Text 
                                    fontWeight='bold' 
                                    fontSize='16px'
                                >
                                    {
                                    detail?.title || 
                                    <Skeleton 
                                        baseColor="#d6d6d6" 
                                        highlightColor="#bfbfbf" 
                                        width={"100%"} 
                                        style={{ 
                                            borderRadius: '3px' 
                                        }} 
                                    />
                                    }
                                </Text>
                                <Text>
                                    {
                                    detail?.about || 
                                    <Skeleton 
                                        baseColor="#d6d6d6" 
                                        highlightColor="#bfbfbf" 
                                        width={"100%"} 
                                        style={{ 
                                            borderRadius: '3px' 
                                        }} 
                                    />
                                    }
                                </Text>
                            </Box>
                            <Box
                                display='flex'
                                flexDirection='column'
                                gap='20px'
                            >
                                {details.map((item, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            w='100%'
                                            display='flex'
                                            alignItems='flex-start'
                                            gap='10px'
                                        >
                                            <Text 
                                                fontWeight='bold' 
                                                fontSize='12px'
                                                color='#666'
                                                width='150px'
                                            >
                                                {item?.title}
                                            </Text>
                                            <Text>:</Text>
                                            <Text
                                                w='calc(100% - 160px)'
                                                maxW='calc(100% - 160px)'
                                                wordBreak={'break-word'}
                                            >
                                                {
                                                item?.content || 
                                                <Skeleton 
                                                    baseColor="#d6d6d6" 
                                                    highlightColor="#bfbfbf" 
                                                    width={"100%"} 
                                                    style={{ 
                                                        borderRadius: '3px' 
                                                    }} 
                                                />
                                                }
                                            </Text>
                                    </Box>
                                )
                            })}
                                <Box
                                    w='100%'
                                    display='flex'
                                    alignItems='flex-start'
                                    gap='10px'
                                >
                                    <Text 
                                        fontWeight='bold' 
                                        fontSize='13px'
                                        color='#666'
                                        width='150px'
                                    >
                                        KETERANGAN
                                    </Text>
                                    <Text>:</Text>
                                    <Text
                                        w='calc(100% - 160px)'
                                    >
                                        {
                                        label || 
                                        <Skeleton 
                                            baseColor="#d6d6d6" 
                                            highlightColor="#bfbfbf" 
                                            width={"100%"} 
                                            style={{ 
                                                borderRadius: '3px' 
                                            }} 
                                        />
                                        }
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            display='flex'
                            gap='10px'
                        >
                            <Button 
                                variant='outline' 
                                colorScheme='blue'
                            >
                                <Link 
                                    target='_blank' 
                                    to={detail?.file}
                                >
                                    Read Full Text
                                </Link>
                            </Button>
                            <Button 
                                variant='outline' 
                                colorScheme='cyan'
                            >
                                <Link 
                                    to={detail?.file}
                                >
                                    <DownloadOutlined/>
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                    <Pdf 
                        pdfUrl={detail?.file}
                    />
                </Box>
            </Box>
        </Layout>
    )
}

export default Detail