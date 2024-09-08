import { createClient } from "@supabase/supabase-js";
import { useEffect, useState, useCallback } from "react";

const supabase = createClient(
	process.env.SUPABASE_API_URL as string,
	process.env.SUPABASE_API_SECRET_ACCESS_TOKEN as string
);

interface useFetchWebProjectImagesProps {
	supabaseId: string;
	viewMode: "web" | "mobile";
	currentImageIndex: number;
	setLoading: (loading: boolean) => void;
}

const useFetchWebProjectImages = ({
	supabaseId,
	viewMode,
	currentImageIndex,
	setLoading
}: useFetchWebProjectImagesProps) => {
	const [currentImage, setCurrentImage] = useState<string | null>(null);
	const [totalImages, setTotalImages] = useState<number>(0);
	const [error, setError] = useState<string | null>(null);

	const fetchImageCount = useCallback(async () => {
		try {
			const { data, error } = await supabase.storage
				.from("portfolio_images")
				.list(`projects/${supabaseId}/${viewMode}`);

			if (error) throw error;

			if (data) {
				setTotalImages(data.length);
			}
		} catch (error) {
			console.error("Failed to fetch image count", error);
			setError("Failed to fetch image count");
		}
	}, [supabaseId, viewMode]);

	const fetchImage = useCallback(
		async (imageIndex: number) => {
			setLoading(true);
			try {
				const { data } = await supabase.storage
					.from("portfolio_images")
					.getPublicUrl(
						`projects/${supabaseId}/${viewMode}/${imageIndex}.jpg`
					);

				if (error) throw error;

				if (data) {
					setCurrentImage(data.publicUrl);
				}
			} catch (error) {
				console.error("Failed to fetch image", error);
				setError("Failed to fetch image");
			} finally {
				setLoading(false);
			}
		},
		[supabaseId, viewMode, setLoading]
	);

	useEffect(() => {
		fetchImageCount();
	}, [fetchImageCount]);

	useEffect(() => {
		if (currentImageIndex >= 0 && currentImageIndex < totalImages) {
			fetchImage(currentImageIndex);
		}
	}, [currentImageIndex, totalImages, fetchImage]);

	return { currentImage, totalImages, error };
};

export default useFetchWebProjectImages;
