import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface useFetchMobileAppImagesProps {
  selectedProjectIndex: number;
  viewMode: 'web' | 'mobile';
  supabaseId: string;
  setLoading: (loading: boolean) => void;
}

const useFetchMobileAppImages = ({
  selectedProjectIndex,
  viewMode,
  supabaseId,
  setLoading,
}: useFetchMobileAppImagesProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        let imageList: string[] = [];

        const bucket = 'portfolio_images';
        const basePath = `projects/${supabaseId}/${viewMode}`;

        const { data: images, error } = await supabase.storage
          .from(bucket)
          .list(basePath, { limit: 10 });

        if (error) throw error;

        if (images) {
          imageList = images.map(
            (image) =>
              supabase.storage
                .from(bucket)
                .getPublicUrl(`${basePath}/${image.name}`).data.publicUrl
          );
        }

        setImages(imageList);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch images');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [selectedProjectIndex, viewMode, supabaseId, setLoading]);

  return { images, error };
};

export default useFetchMobileAppImages;
