import { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Typography } from '../../components/Typography';

type TabItemProps = {
  activeRoute: string;
  route: string;
  counter?: number;
  onRouteChange: (route: string) => void;
};

function TabItem({ activeRoute, counter = 0, route, onRouteChange }: TabItemProps) {
  const isFocused = activeRoute === route;

  const onPress = useCallback(() => {
    onRouteChange(route);
  }, [onRouteChange, route]);

  return (
    <TouchableOpacity
      className={`px-2`}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
    >
      <Typography
        className={`${isFocused ? 'text-offBlack dark:text-white' : 'text-metal'}`}
        font={{ family: 'ABCDiatype', weight: 'Medium' }}
      >
        {route}
        {counter > 0 && <Text> {counter}</Text>}
      </Typography>
    </TouchableOpacity>
  );
}

type ProfileTabRoutes = {
  name: string;
  counter?: number;
};

type Props = {
  activeRoute: string;
  onRouteChange: (route: string) => void;
  routes: ProfileTabRoutes[];
};

export function ProfileTabBar({ routes, activeRoute, onRouteChange }: Props) {
  return (
    <View className="border-porcelain dark:border-graphite mt-4 flex flex-row items-center justify-center border-t border-b px-2 py-3">
      {routes.map((route) => {
        return (
          <TabItem
            key={route.name}
            route={route.name}
            onRouteChange={onRouteChange}
            activeRoute={activeRoute}
            counter={route.counter}
          />
        );
      })}
    </View>
  );
}
