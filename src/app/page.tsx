'use client';
import LinksComponent from './components/aboutme/LinksComponent';
import AboutMeHeroSection from './components/aboutme/AboutMeHeroSection';
import AboutMeHeader from './components/aboutme/AboutMeHeader';
import MobileAboutMeHeroSection from './components/aboutme/MobileAboutMeHeroSection';
import TechSkillsSection from './components/aboutme/TechSkillsSections';
import SoftSkillsSection from './components/aboutme/SoftSkillsSection';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Home() {
  const [singularExpansion, setSingularExpansion] = useState('none');
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const image = await supabase.storage
          .from('portfolio_images')
          .getPublicUrl(`profile/profile.webp`).data.publicUrl;
        if (image) {
          setLoading(false);
          setImage(image);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch image');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="h-screen w-full overflow-x-hidden overflow-y-scroll border-0 border-orangeflame bg-projects-gradient sm:border-l lg:h-screen lg:overflow-y-scroll">
      <div className="flex w-full flex-col justify-between">
        <AboutMeHeader />
        <div className="flex flex-col justify-evenly lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col items-start justify-start align-middle">
            <div className="flex h-auto w-full flex-col items-start justify-start rounded-lg">
              <div className="hidden w-[100%] md:flex">
                <AboutMeHeroSection image={image} loading={loading} />
              </div>
              <div className="flex w-[100%] md:hidden">
                <MobileAboutMeHeroSection image={image} loading={loading} />
              </div>
              <div className="hidden w-full sm:my-8 md:my-2 md:flex">
                <LinksComponent mobileScreen={false} />
              </div>
            </div>
            <TechSkillsSection
              singularExpansion={singularExpansion}
              setSingularExpansion={setSingularExpansion}
            />

            <SoftSkillsSection
              singularExpansion={singularExpansion}
              setSingularExpansion={setSingularExpansion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
