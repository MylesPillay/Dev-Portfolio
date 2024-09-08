import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
	process.env.SUPABASE_API_URL as string,
	process.env.SUPABASE_API_SECRET_ACCESS_TOKEN as string
);

interface useFetchMobileAppImagesProps {
	selectedProjectIndex: number;
	viewMode: "web" | "mobile";
	supabaseId: string;
	setLoading: (loading: boolean) => void;
}

const useFetchMobileAppImages = ({
	selectedProjectIndex,
	viewMode,
	supabaseId,
	setLoading
}: useFetchMobileAppImagesProps) => {
	const [images, setImages] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				setLoading(true);
				let imageList: string[] = [];

				const { data: images, error } = await supabase.storage
					.from("portfolio_images")
					.list(`projects/${supabaseId}/${viewMode}`, {
						limit: 10
					});

				if (error) throw error;

				if (images) {
					imageList = images.map(
						(image) =>
							supabase.storage
								.from("portfolio_images")
								.getPublicUrl(
									`projects/${supabaseId}/${viewMode}/${image.name}`
								).data.publicUrl
					);
				}

				setImages(imageList);
			} catch (error) {
				setError("Failed to fetch images");
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchImage();
	}, [selectedProjectIndex, viewMode, supabaseId, setLoading]);

	return { images, error };
};

export default useFetchMobileAppImages;
