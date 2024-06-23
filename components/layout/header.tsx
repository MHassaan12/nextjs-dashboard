import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu';
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden text-sm lg:block">
          <span className="mr-2 text-gray-500">My Workspace</span>
          <span className="mr-2 text-gray-500">/</span>
          My new form
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Create
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/connect" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Connect
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Share
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Results
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline"><Eye /></Button>
          <Button>Publish</Button>
          <UserNav />
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </div>
  );
}
