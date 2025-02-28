import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Text, Image } from '@chakra-ui/react';
import { fetchAdVariants, fetchMediaLibrary } from '@/services/airtableService';

const AdVariantsGrid = () => {
  const [adVariants, setAdVariants] = useState([]);
  const [mediaLibrary, setMediaLibrary] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const adVariantsData = await fetchAdVariants();
      const mediaLibraryData = await fetchMediaLibrary();
      setAdVariants(adVariantsData);
      setMediaLibrary(mediaLibraryData);
    };

    getData();
  }, []);

  const getThumbnailKey = (adVariantId: string) => {
    const mediaItem = mediaLibrary.find((item: any) => 
      item.fields.linkedAdVariants && item.fields.linkedAdVariants.includes(adVariantId)
    );
    return mediaItem ? mediaItem.fields.thumbnailKey : 'No Thumbnail';
  };

  return (
    <SimpleGrid columns={4} columnGap="5" rowGap="5">
      {adVariants.map((variant: any) => (
        <Box key={variant.id} p={5} shadow="md" borderWidth="1px" rounded="md">
          <Image src={'https://placehold.co/1080x1080'} alt={variant.fields.Name} />
          <Text fontWeight="bold">{variant.fields.Name}</Text>
          <Text>{getThumbnailKey(variant.fields.adVariantId)}</Text>
          {/* Add more fields as needed */}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default AdVariantsGrid;